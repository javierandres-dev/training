let regexp = undefined;
let res = undefined;
regexp = /aeiou/; // Literal notation
regexp = new RegExp("aeiou"); // Constructor with string pattern
regexp = new RegExp(/aeiou/); // Constructor with expression literal
regexp = new RegExp(/aeiou/, "g"); // Flag in constructor
res = regexp.test("aeiou"); // Method tests for a match in its string parameter
regexp = /|a|e|i|o|u/; // Or
regexp = new RegExp("a|e|i|o|u"); // Or
regexp = new RegExp(/a|e|i|o|u/); // Or
res = regexp.test("i");
regexp = new RegExp(/^([0-9]{4})$/);
res = regexp.test(2020);
regexp = new RegExp(/^([a-z]){2}([0-9]){7}$/);
res = regexp.test("ab1234567");
regexp = new RegExp("^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-Z])+$");
res = regexp.test("Mr.X");
regexp = new RegExp(/([0-9])+/, "g");
res = regexp.test(["1", "2", "3"]);
res = regexp.test(["102", "1948948", "1.3", "4.5"]);
console.log(regexp);
console.log(res);
