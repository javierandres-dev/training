/**
 * Testing to learn
 */
const str = "Hello, World!";
const str0 = "Hello, World!";
const str1 = "Hello,";
const str2 = "World!";
const str3 = "Hello,";
const str4 = "World!";
const str5 = "ab";
const str6 = "cd";
const str7 = "    Hi    ";
const num = 360;
const icon = "★";
let res = undefined;
res = str.charAt(0);
res = str.charAt(12);
res = str.charCodeAt(0);
res = str.charCodeAt(12);
res = icon.codePointAt(0);
res = str1.concat(" ", str2);
res = str.concat(str1, str2);
res = str.endsWith("World!");
res = str1.endsWith(",");
res = str2.endsWith("!");
res = String.fromCharCode(72);
res = String.fromCodePoint(9733);
res = str.includes(",");
res = str.includes("Hello");
res = str.indexOf("o");
res = str.lastIndexOf("o");
res = str.localeCompare(str0);
res = str1.localeCompare(str2);
res = str6.localeCompare(str5);
res = str.match(/ello/);
res = str.match(/ello/g);
res = str1.repeat(4);
res = str.replace("Hello", "Hi");
res = str.search("orld");
res = str.slice(1, 12);
res = str.split("");
res = str.split(",");
res = str.split(" ");
res = str.startsWith("Hell");
res = str.substr(1, 12);
res = str.substring(1, 12);
res = str.toLocaleLowerCase();
res = str.toLowerCase();
res = str.toLocaleUpperCase();
res = str.toUpperCase();
res = num.toString();
res = str7.trim();
res = str7.trimStart();
res = str7.trimEnd();
res = str.valueOf();
console.log(res);
