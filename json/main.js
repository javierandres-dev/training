"use strict";
import jsonObject from "./json-object.json" assert { type: "json" };
import jsonArray from "./json-array.json" assert { type: "json" };
import jsonArrayOfObjects from "./json-array-of-objects.json" assert { type: "json" };

console.log("import jsonObject:", jsonObject);
console.log("import jsonArray:", jsonArray);
console.log("import jsonArrayOfObjects:", jsonArrayOfObjects);

fetch("./json-object.json")
  .then((data) => data.json(data))
  .then((obj) => console.log("fetch jsonObject:", obj));

fetch("./json-array.json")
  .then((data) => data.json(data))
  .then((obj) => console.log("fetch jsonArray:", obj));

fetch("./json-array-of-objects.json")
  .then((data) => data.json(data))
  .then((obj) => console.log("fetch jsonArrayOfObjects:", obj));

const strJsonObject = `{
  "name": "anne",
  "weight": 60,
  "height": 1.7,
  "hobies": ["read", "dance"],
  "contact": {
    "address": "123 east",
    "phone": "555"
  },
  "enable": true,
  "profile": null
}`;
console.log("strJsonObject:", strJsonObject);
console.log("typeof strJsonObject:", typeof strJsonObject);
console.log("strJsonObject.name:", strJsonObject.name);

const strJsonArray = `["string value", 60, 1.7, true, null, [], {}]`;
console.log("strJsonArray:", strJsonArray);
console.log("typeof strJsonArray:", typeof strJsonArray);
console.log("strJsonArray[0]:", strJsonArray[0]);

const strJsonArrayOfObjects = `[
  {
    "name": "anne",
    "email": "anne@example.com"
  },
  {
    "name": "john",
    "email": "john@example.com"
  }
]`;
console.log("strJsonArrayOfObjects:", strJsonArrayOfObjects);
console.log("typeof strJsonArrayOfObjects:", typeof strJsonArrayOfObjects);
console.log("strJsonArrayOfObjects[0]:", strJsonArrayOfObjects[0]);

const jsObject = {
  name: "anne",
  weight: 60,
  height: 1.7,
  hobies: ["read", "dance"],
  contact: {
    address: "123 east",
    phone: "555",
  },
  enable: true,
  profile: null,
};
console.log("jsObject:", jsObject);
console.log("typeof jsObject:", typeof jsObject);
console.log("jsObject.name:", jsObject.name);

const jsArray = ["string value", 60, 1.7, true, null, [], {}];
console.log("jsArray:", jsArray);
console.log("typeof jsArray:", typeof jsArray);
console.log("jsArray[0]:", jsArray[0]);

const jsArrayOfObjects = [
  {
    name: "anne",
    email: "anne@example.com",
  },
  {
    name: "john",
    email: "john@example.com",
  },
];
console.log("jsArrayOfObjects:", jsArrayOfObjects);
console.log("typeof jsArrayOfObjects:", typeof jsArrayOfObjects);
console.log("jsArrayOfObjects[0]:", jsArrayOfObjects[0]);

const strJson = `{"name": "anne", "web": "www.anne.com"}`;
console.log("strJson:", strJson);
console.log("typeof strJson:", typeof strJson);
const deserialize = JSON.parse(strJson);
console.log("deserialize:", deserialize);
console.log("deserialize.web:", deserialize.web);
console.log("typeof deserialize:", typeof deserialize);

const objJs = { name: "john", web: "www.john.com" };
console.log("objJs:", objJs);
console.log("typeof objJs:", typeof objJs);
const serialize = JSON.stringify(objJs);
console.log("serialize:", serialize);
console.log("serialize.web:", serialize.web);
console.log("typeof serialize:", typeof serialize);
