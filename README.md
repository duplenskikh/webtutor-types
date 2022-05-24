# Репозиторий с типами для WebTutor

## Подключение к проекту

1. `npm i webtutor-types`
2. `tsconfig.json` должен быть следующего содержания:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "noLib": true,
    "typeRoots": [
      "./node_modules/webtutor-types/lib"
    ]
  }
}
```

## Исправления

1. `git clone`
2. Fix
3. Pull request
