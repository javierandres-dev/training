### Backend
create a basic ts/node project
```
$ npm init -y
$ npm install typescript ts-node @types/node --save-dev
```

generate tsconfig file
```
$ npx tsc --init
```

tsconfig.json
```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "alwaysStrict": true,
    "noImplicitOverride": true,
    "exactOptionalPropertyTypes": true,
    "strict": true,
    "removeComments": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

install ts/express
```
$ npm install express
$ npm install @types/express --save-dev
```

src/index.ts
```
import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

package.json
```
"scripts": {
    "start": "ts-node src/index.ts"
  }
```

test
```
$ npm start
```

nodemon
```
$ npm i -D nodemon
```
update scripts
```
  "dev": "nodemon src/index.ts"
```

nodemon.json
```
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node src/index.ts"
}
```

structure
```
my-backend-server/
├── src/
│   ├── middlewares/
│   ├── controllers/
│   ├── routers/
│   ├── models/
│   ├── services/
│   ├── index.ts
├── .env
├── nodemon.json
├── package.json
├── tsconfig.json
```

- dotenv
- morgan
- cors
