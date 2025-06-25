"use strict";
// JavaScript Regular Expressions

/* 1. What is a Regular Expression?
A **regular expression** (regex) is a pattern used to match character combinations in strings. In JavaScript, regex is implemented using the `RegExp` object or literal syntax. */

// 2. Creating a Regular Expression
// Literal Syntax:
const regexLiteral = /abc/;
console.log(regexLiteral); // /abc/

// Constructor Syntax:
const regexConstructor = new RegExp("abc");
console.log(regexConstructor); // /abc/

// 3. Basic methods
// test() method checks if a string matches the regex pattern
const str1 = "abcdef";
const str2 = "uvwxyz";
console.log(regexLiteral.test(str1)); // true
console.log(regexLiteral.test(str2)); // false

//exec() method returns an array of matches or null if no match is found
const execResult1 = regexLiteral.exec(str1);
console.log(execResult1); // [ 'abc', index: 0, input: 'abcdef', groups: undefined ]
const execResult2 = regexLiteral.exec(str2);
console.log(execResult2); // null

// match() method returns an array of matches or null if no match is found
const matches1 = str1.match(regexLiteral);
console.log(matches1); // [ 'abc', index: 0, input: 'abcdef', groups: undefined ]
const matches2 = str2.match(regexLiteral);
console.log(matches2); // null

// replace() method replaces matched substrings with a specified string
const replacedStr1 = str1.replace(regexLiteral, "xyz");
console.log(replacedStr1); // xyzdef
const replacedStr2 = str2.replace(regexLiteral, "xyz");
console.log(replacedStr2); // uvwxyz

// split() method splits a string into an array of substrings based on the regex pattern
const splitStr1 = str1.split(regexLiteral);
console.log(splitStr1); // [ '', 'def' ]
const splitStr2 = str2.split(regexLiteral);
console.log(splitStr2); // [ 'uvwxyz' ]

// 4. Basic Patterns
// Literal characters
const regexA = /a/;
console.log(regexA.test("apple")); // true
console.log(regexA.test("banana")); // false

// . : Any character except newline
const regexDot = /a.b/; // Matches 'a' followed by any character and then 'b'
console.log(regexDot.test("acb")); // true
console.log(regexDot.test("a\nb")); // false (newline is not matched)

// \d : Any digit (0-9)
const regexDigit = /\d/; // Matches any digit
console.log(regexDigit.test("123")); // true
console.log(regexDigit.test("abc")); // false

// \D : Any non-digit
const regexNonDigits = /\D/; // Matches any non-digit
console.log(regexNonDigits.test("abc")); // true
console.log(regexNonDigits.test("123")); // false

// \w : Any word character (alphanumeric + underscore)
const regexWord = /\w/; // Matches any word character
console.log(regexWord.test("hello_world")); // true
console.log(regexWord.test("!@#")); // false

// \s : Any whitespace character (space, tab, newline)
const regexWhitespace = /\s/; // Matches any whitespace character
console.log(regexWhitespace.test("hello world")); // true
console.log(regexWhitespace.test("helloworld")); // false

// ^ : Start of string
const regexStart = /^hello/; // Matches 'hello' at the start of the string
console.log(regexStart.test("hello world")); // true
console.log(regexStart.test("world hello")); // false

// $ : End of string
const regexEnd = /world$/; // Matches 'world' at the end of the string
console.log(regexEnd.test("hello world")); // true
console.log(regexEnd.test("world hello")); // false

// [abc] : Any of a, b, or c
const regexClass = /[abc]/; // Matches 'a', 'b', or 'c'
console.log(regexClass.test("apple")); // true
console.log(regexClass.test("xyz")); // false

// [^abc] : Not a, b, or c
const regexNegatedClass = /[^abc]/; // Matches any character except 'a', 'b', or 'c'
console.log(regexNegatedClass.test("xyz")); // true
console.log(regexNegatedClass.test("apple")); // false

// a|b : a or b
const regexOr = /a|b/; // Matches 'a' or 'b'
console.log(regexOr.test("apple")); // true
console.log(regexOr.test("banana")); // true

// 5. Quantifiers
// * : Zero or more occurrences
const regexAsterisk = /a*/; // Matches zero or more 'a's
console.log(regexAsterisk.test("aaa")); // true
console.log(regexAsterisk.test("b")); // true (zero occurrences of 'a')

// + : One or more occurrences
const regexPlus = /a+/; // Matches one or more 'a's
console.log(regexPlus.test("aaa")); // true
console.log(regexPlus.test("b")); // false (zero occurrences of 'a')

// ? : Zero or one occurrence
const regexQuestion = /a?/; // Matches zero or one 'a'
console.log(regexQuestion.test("a")); // true
console.log(regexQuestion.test("b")); // true (zero occurrences of 'a')

// {n} : Exactly n occurrences
const regexExact = /a{2}/; // Matches exactly two 'a's
console.log(regexExact.test("aa")); // true
console.log(regexExact.test("aaa")); // false (three 'a's)

// {n,} : At least n occurrences
const regexAtLeast = /a{2,}/; // Matches at least two 'a's
console.log(regexAtLeast.test("aa")); // true
console.log(regexAtLeast.test("aaa")); // true
console.log(regexAtLeast.test("a")); // false (one 'a')

// {n,m} : Between n and m occurrences
const regexBetween = /a{2,4}/; // Matches between two and four 'a's
console.log(regexBetween.test("aa")); // true
console.log(regexBetween.test("aaa")); // true
console.log(regexBetween.test("aaaa")); // true
console.log(regexBetween.test("a")); // false (one 'a')
console.log(regexBetween.test("aaaaa")); // false (five 'a's)

// 6. Flags
// g : Global search (find all matches)
const regexGlobal = /abc/g; // Matches all occurrences of 'abc'
const strWithMultipleMatches = "abc xyz abc";
console.log(strWithMultipleMatches.match(regexGlobal)); // [ 'abc', 'abc' ]

// i : Case-insensitive matching
const regexCaseInsensitive = /abc/i; // Matches 'abc' or 'ABC'
console.log(regexCaseInsensitive.test("abc")); // true
console.log(regexCaseInsensitive.test("ABC")); // true
console.log(regexCaseInsensitive.test("aBc")); // true

// m : Multiline matching
const regexMultiline = /^abc/m; // Matches 'abc' at the start of each line
const multilineStr = "abc\nxyz\nabc";
console.log(regexMultiline.test(multilineStr)); // true (matches 'abc' at the start of the first line)
console.log(multilineStr.match(regexMultiline)); // [ 'abc', index: 0, input: 'abc\nxyz\nabc', groups: undefined ]

// s : Dot matches newline
const regexDotAll = /a.b/s; // Matches 'a' followed by any character
const strWithNewline = "a\nb";
console.log(regexDotAll.test(strWithNewline)); // true (matches 'a' followed by newline and 'b')

// 7. Basic Examples
// Validate Username
const usernamePattern = /^[a-zA-Z0-9_]{3,16}$/;
const username1 = "user_name123";
const username2 = "us"; // Too short
const username3 = "user_name0123456789"; // Too long
console.log(usernamePattern.test(username1)); // true
console.log(usernamePattern.test(username2)); // false
console.log(usernamePattern.test(username3)); // false

// Validate Password
const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// At least 8 characters, one uppercase, one lowercase, one digit, and one special character
const password1 = "Password123!";
const password2 = "password"; // No uppercase, no digit, no special character
const password3 = "PASSWORD123!"; // No lowercase, no digit, no special character
const password4 = "Pass123"; // No special character
console.log(passwordPattern.test(password1)); // true
console.log(passwordPattern.test(password2)); // false
console.log(passwordPattern.test(password3)); // false
console.log(passwordPattern.test(password4)); // false

// Validate Email
const pattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
const email1 = "test@example.com";
const email2 = "invalid-email@.com";
console.log(pattern.test(email1)); // true
console.log(pattern.test(email2)); // false

// Validate Phone Number
const phonePattern = /^\+?[1-9]\d{1,14}$/; // E.164 format
const phone1 = "+1234567890";
const phone2 = "12345";
const phone3 = "+573005600756";
console.log(phonePattern.test(phone1)); // true
console.log(phonePattern.test(phone2)); // false
console.log(phonePattern.test(phone3)); // true

// Validate URL
const urlPattern = /^(https?:\/\/)?([\w.-]+)(:[0-9]+)?(\/[\w.-]*)*\/?$/;
const url1 = "https://example.com";
const url2 = "http://example.com:8080/path/to/resource";
const url3 = "invalid-url";
console.log(urlPattern.test(url1)); // true
console.log(urlPattern.test(url2)); // true
console.log(urlPattern.test(url3)); // false

// Validate Date (YYYY-MM-DD)
const datePattern = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
const date1 = "2023-10-05";
const date2 = "2023-13-01"; // Invalid month
console.log(datePattern.test(date1)); // true
console.log(datePattern.test(date2)); // false

// Validate Hex Color Code
const hexColorPattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
const hexColor1 = "#ff5733";
const hexColor2 = "#f53";
const hexColor3 = "123456"; // Invalid format
console.log(hexColorPattern.test(hexColor1)); // true
console.log(hexColorPattern.test(hexColor2)); // true
console.log(hexColorPattern.test(hexColor3)); // false

// Validate IPv4 Address
const ipv4Pattern =
  /^(25[0-5]|2[0-4]\d{2}|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d{2}|[01]?\d{1,2})){3}$/;
const ipv4_1 = "0.0.0.0"; // Valid IP
const ipv4_2 = "255.255.255.255"; // Valid IP
const ipv4_3 = "192.168.0.1"; // Valid IP
const ipv4_4 = "300.168.0.1"; // Invalid IP
console.log(ipv4Pattern.test(ipv4_1)); // true
console.log(ipv4Pattern.test(ipv4_2)); // true
console.log(ipv4Pattern.test(ipv4_3)); // true
console.log(ipv4Pattern.test(ipv4_4)); // false

// Validate Credit Card Number
const creditCardPattern =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
const creditCard1 = "4111111111111111"; // Visa
const creditCard2 = "5500000000000004"; // MasterCard
const creditCard3 = "340000000000009"; // American Express
const creditCard4 = "1234567890123456"; // Invalid
console.log(creditCardPattern.test(creditCard1)); // true
console.log(creditCardPattern.test(creditCard2)); // true
console.log(creditCardPattern.test(creditCard3)); // true
console.log(creditCardPattern.test(creditCard4)); // false

// 8. Challenge: Forbidden Words Checker - Checks if a message contains forbidden words using regex.
function forbiddenWordsChecker(message) {
  const forbiddenWords = /bad|ugly|hate/; // Example forbidden words
  if (forbiddenWords.test(message)) {
    return "Warning: Your message contains forbidden words!";
  } else {
    return "Your message is clean.";
  }
}
console.log(forbiddenWordsChecker("This is a bad message.")); // Warning: Your message contains forbidden words!
console.log(forbiddenWordsChecker("This is a good message.")); // Your message is clean.
