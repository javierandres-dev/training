'use strict'
/* JSON literal
{
  "firstName":"pepita",
  "lastName":"pérez"
}
KEYS must be strings.
VALUES must be a valid JSON data type:
string, number, object, array, boolean, null.
JSON cannot be an object.  JSON is a string format.
The data is only JSON when it is in a string format.
When it is converted to a JavaScript variable, it becomes a JavaScript object.
*/

// Deserialization
const jsonString = '{"firstName":"pepita", "lastName":"pérez" }'
const jsObject = JSON.parse(jsonString)

console.log(jsonString);
console.log(typeof jsonString);

console.log(jsObject);
console.log(typeof jsObject);

// Serialization
const jsObj = {firstName: 'jon', lastName: 'doe'}
const jsonStr = JSON.stringify(jsObj)

console.log(jsObj);
console.log(typeof jsObj);

console.log(jsonStr);
console.log(typeof jsonStr);