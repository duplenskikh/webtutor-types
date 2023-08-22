<h1 align="center">WTT</h1>
<div align="center">
  Typescript types for WebSoft HCM backend language.
  
  [![actions](https://github.com/umbrik/webtutor-types/actions/workflows/actions.yml/badge.svg)](https://github.com/umbrik/webtutor-types/actions/workflows/actions.yml)
  ![npm](https://img.shields.io/npm/dy/@umbrik/webtutor-types)
</div>

## 📦 Install

```bash
npm i @umbrik/webtutor-types -D
```

```bash
yarn add @umbrik/webtutor-types -D
```

## 🔨 Setup
`tsconfig.json` example:

```json
{
  ...
  "compilerOptions": {
    ...
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
    ...
  }
  ...
}
```

## ⌨️ Usage

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

## 🔨 Tests

This repo supports tests for types.  
You can check [the docs](https://github.com/ai/check-dts#writing-negative-test) for a better understanding.

## 🤝 Contributing

1. Clone
2. Code
3. PR
