Project
```
$ ng new <name>
$ npm install bootstrap --save
$ npm install jquery --save
$ npm install popper.js --save
```
angular.json
```
...
  "styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
  ],
  "scripts": [
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/bootstrap/dist/js/bootstrap.min.js"
  ]
...
```
