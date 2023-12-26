<h1 align="center">WT Types</h1>
<div align="center">
  Typescript типы для WebSoft HCM.
  
  [![actions](https://github.com/umbrik/webtutor-types/actions/workflows/actions.yml/badge.svg)](https://github.com/umbrik/webtutor-types/actions/workflows/actions.yml)
  ![npm](https://img.shields.io/npm/dy/@umbrik/webtutor-types)
</div>

## 📦 Установка

> **_NOTE:_** Типы работают только с `typescript<=4.4.4`

```bash
npm i @umbrik/webtutor-types -D
```

```bash
yarn add @umbrik/webtutor-types -D
```

## 🔨 Настройка
Типы подключаются в `tsconfig.json`.

Для разработки в WT обязательно неоходимо отключить все остальные библиотеки с помощью `noLib` и добавить типы в `typeRoots`.

Пример:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "es6",
    "esModuleInterop": true,
    "strict": false,
    "noImplicitAny": true,
    "allowJs": true,
    "isolatedModules": true,
    "moduleResolution": "node",
    "baseUrl": "src",
    "noLib": true,
    "typeRoots": [
      "node_modules/@umbrik/webtutor-types/lib",
      "node_modules/@umbrik/webtutor-types/lib/xml"
    ]
  }
}
```

## ⌨️ Пример использования

```ts
type FuncManagerQueryResult = {
  person_id: XmlElem<number>;
}

function getManagersByType(bossTypeCode: string = "main") {
  const sql = `sql:
    SELECT
      [t0].[person_id]
    FROM [func_managers] AS [t0]
      INNER JOIN [boss_types] AS [t1] ON [t1].[id] = [t0].[boss_type_id]
    WHERE [t1].[code] = ${SqlLiteral(bossTypeCode)}
  `;

  const query = ArraySelectAll(tools.xquery<FuncManagerQueryResult>(sql));

  const result = [];
  let collaboratorDocument;
  let personId;

  for (let i = 0; i < query.length; i++) {
    personId = query[i].person_id.Value;
    collaboratorDocument = tools.open_doc<CollaboratorDocument>(personId);

    if (collaboratorDocument === undefined) {
      alert(`Can't open collaborator document by id ${personId}`);
      continue;
    }

    result.push({
      personId,
      fullname: collaboratorDocument.TopElem.fullname()
    });
  }
  
  return result;
}
```

## 🔨 Тестирование

В репозитории есть базовое тестирования для типов.

Можно руководствоваться [документацией](https://github.com/ai/check-dts#writing-negative-test) для написания тестов.

## 🤝 Contributing

1. Clone
2. Code
3. PR
