# Репозиторий с типами для WebTutor

## Подключение к проекту

1. `npm i @umbrik/webtutor-types --save-dev`
2. `tsconfig.json` должен быть следующего содержания:

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
      "node_modules/@umbrik/webtutor-types/lib"
    ]
  }
}
```

## Исправления

1. `git clone`
2. Fix
3. Pull request
