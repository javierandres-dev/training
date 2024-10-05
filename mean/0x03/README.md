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
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
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

structure
```
my-backend-server/
├── src/
│   ├── middlewares/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── index.ts
├── package.json
├── tsconfig.json
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

dotenv
```
$ npm i dotenv
```
