"use strict";
const d = document;
// 1. Challenge: Length of the word - Take a word as input and returns the lenght of the word using only length property.
function one() {
  const $input1 = d.getElementById("input1");
  const $output1 = d.getElementById("output1");
  const word = $input1.value.trim();
  try {
    const length = word.length;
    if (length === 0) {
      $output1.textContent = "The input cannot be an empty string";
      return;
    }
    $output1.textContent = `The length of the word "${word}" is ${length}.`;
  } catch (error) {
    $output1.textContent = `Error: ${error.message}`;
  }
}

// 2. Challenge: Secret Letter Finder - Takes a word and an index as input, and returns the character at that position, support negative indices too using only at().
function two() {
  const $input2 = d.getElementById("input2");
  const $index2 = d.getElementById("index2");
  const $output2 = d.getElementById("output2");
  const word = $input2.value.trim();
  const index = parseInt($index2.value.trim());
  try {
    if (word.length === 0) {
      $output2.textContent = "The input cannot be an empty string";
      return;
    }
    if (isNaN(index)) {
      $output2.textContent = "Please provide a valid index.";
      return;
    }
    const charAtIndex = word.at(index);
    if (charAtIndex === undefined) {
      $output2.textContent = `No character found at index ${index}.`;
    } else {
      $output2.textContent = `The character at index ${index} is "${charAtIndex}".`;
    }
  } catch (error) {
    $output2.textContent = `Error: ${error.message}`;
  }
}

// 3. Challenge: Reverse Letter Builder - Takes a word and returns a new string that is the reverse of the original—but you can only use charAt().
function three() {
  const $input3 = d.getElementById("input3");
  const $output3 = d.getElementById("output3");
  const word = $input3.value.trim();
  try {
    if (word.length === 0) {
      $output3.textContent = "The input cannot be an empty string";
      return;
    }
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word.charAt(i);
    }
    $output3.textContent = `The reversed word is "${reversedWord}".`;
  } catch (error) {
    $output3.textContent = `Error: ${error.message}`;
  }
}

// 4. Challenge: ASCII Password Generator - Takes a string and returns a "password" made by converting each character into its ASCII code using only charCodeAt().
function four() {
  const $input4 = d.getElementById("input4");
  const $output4 = d.getElementById("output4");
  const word = $input4.value.trim();
  try {
    if (word.length === 0) {
      $output4.textContent = "The input cannot be an empty string";
      return;
    }
    let password = "";
    for (let i = 0; i < word.length; i++) {
      password += word.charCodeAt(i);
    }
    $output4.textContent = `The ASCII password is "${password}".`;
  } catch (error) {
    $output4.textContent = `Error: ${error.message}`;
  }
}

// 5. Challenge: Codepoint Signature Scanner - Receives a string and returns the sum of the Unicode code points of all characters, using only codePointAt().
function five() {
  const $input5 = d.getElementById("input5");
  const $output5 = d.getElementById("output5");
  const word = $input5.value.trim();
  try {
    if (word.length === 0) {
      $output5.textContent = "The input cannot be an empty string";
      return;
    }
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      sum += word.codePointAt(i);
    }
    $output5.textContent = `The sum of Unicode code points is ${sum}.`;
  } catch (error) {
    $output5.textContent = `Error: ${error.message}`;
  }
}

// 6. Challenge: Custom Welcome Banner - Builds a welcome banner using only concat().
function six() {
  const $input6 = d.getElementById("input6");
  const $output6 = d.getElementById("output6");
  const name = $input6.value.trim();
  try {
    if (name.length === 0) {
      $output6.textContent = "The input cannot be an empty string";
      return;
    }
    const banner = "Welcome, ".concat(name, "!");
    $output6.textContent = banner;
  } catch (error) {
    $output6.textContent = `Error: ${error.message}`;
  }
}

// 7. Challenge: File Type Validator - Takes a filename and checks whether it ends with .js. Use only endsWith() to determine if it's a JavaScript file.
function seven() {
  const $input7 = d.getElementById("input7");
  const $output7 = d.getElementById("output7");
  const filename = $input7.value.trim();
  try {
    if (filename.length === 0) {
      $output7.textContent = "The input cannot be an empty string";
      return;
    }
    const isJsFile = filename.endsWith(".js");
    if (isJsFile) {
      $output7.textContent = `"${filename}" is a JavaScript file.`;
    } else {
      $output7.textContent = `"${filename}" is not a JavaScript file.`;
    }
  } catch (error) {
    $output7.textContent = `Error: ${error.message}`;
  }
}

// 8. Challenge: Forbidden Word Detector - Checks if a user’s message contains any "forbidden words" and returns a warning if it does—using only includes().
function eight() {
  const $input8 = d.getElementById("input8");
  const $output8 = d.getElementById("output8");
  const message = $input8.value.trim();
  const forbiddenWords = ["bad", "ugly", "hate"];
  try {
    if (message.length === 0) {
      $output8.textContent = "The input cannot be an empty string";
      return;
    }
    let containsForbiddenWord = false;
    for (const word of forbiddenWords) {
      if (message.includes(word)) {
        containsForbiddenWord = true;
        break;
      }
    }
    if (containsForbiddenWord) {
      $output8.textContent = "Warning: Your message contains forbidden words!";
    } else {
      $output8.textContent = "Your message is clean.";
    }
  } catch (error) {
    $output8.textContent = `Error: ${error.message}`;
  }
}

// 9. Challenge: Word Presence Checker - Checks whether a keyword exists in a sentence using only indexOf().
function nine() {
  const $input9 = d.getElementById("input9");
  const $keyword9 = d.getElementById("keyword9");
  const $output9 = d.getElementById("output9");
  const sentence = $input9.value.trim();
  const keyword = $keyword9.value.trim();
  try {
    if (sentence.length === 0 || keyword.length === 0) {
      $output9.textContent = "Both inputs cannot be empty strings.";
      return;
    }
    const index = sentence.indexOf(keyword);
    if (index !== -1) {
      $output9.textContent = `The keyword "${keyword}" is found at index ${index}.`;
    } else {
      $output9.textContent = `The keyword "${keyword}" is not found in the sentence.`;
    }
  } catch (error) {
    $output9.textContent = `Error: ${error.message}`;
  }
}

// 10. Challenge: Emoji Sanity Checker - Checks if a string is well-formed using only isWellFormed() and returns an appropriate message.
function ten() {
  const $input10 = d.getElementById("input10");
  const $output10 = d.getElementById("output10");
  const str = $input10.value.trim();
  try {
    if (str.length === 0) {
      $output10.textContent = "The input cannot be an empty string";
      return;
    }
    const isWellFormed = str.isWellFormed();
    if (isWellFormed) {
      $output10.textContent = `"${str}" is well-formed.`;
    } else {
      $output10.textContent = `"${str}" is not well-formed.`;
    }
  } catch (error) {
    $output10.textContent = `Error: ${error.message}`;
  }
}

// 11. Challenge: Last Vowel Locator - takes a word and returns the position of the last vowel using only lastIndexOf(). Vowels to check: a, e, i, o, u (lowercase only).
function eleven() {
  const $input11 = d.getElementById("input11");
  const $output11 = d.getElementById("output11");
  const word = $input11.value.trim();
  try {
    if (word.length === 0) {
      $output11.textContent = "The input cannot be an empty string";
      return;
    }
    const vowels = "aeiou";
    let lastVowelIndex = -1;
    for (const vowel of vowels) {
      const index = word.lastIndexOf(vowel);
      if (index > lastVowelIndex) {
        lastVowelIndex = index;
      }
    }
    if (lastVowelIndex !== -1) {
      $output11.textContent = `The last vowel is at index ${lastVowelIndex}.`;
    } else {
      $output11.textContent = "No vowels found in the word.";
    }
  } catch (error) {
    $output11.textContent = `Error: ${error.message}`;
  }
}

// 12. Challenge: Dictionary Sort Checker - Takes two strings and tells you whether the first comes before, after, or is the same as the second—based solely on localeCompare().
function twelve() {
  const $input12a = d.getElementById("input12a");
  const $input12b = d.getElementById("input12b");
  const $output12 = d.getElementById("output12");
  const str1 = $input12a.value.trim();
  const str2 = $input12b.value.trim();
  try {
    if (str1.length === 0 || str2.length === 0) {
      $output12.textContent = "Both inputs cannot be empty strings.";
      return;
    }
    const comparison = str1.localeCompare(str2);
    if (comparison < 0) {
      $output12.textContent = `"${str1}" comes before "${str2}".`;
    } else if (comparison > 0) {
      $output12.textContent = `"${str1}" comes after "${str2}".`;
    } else {
      $output12.textContent = `"${str1}" is the same as "${str2}".`;
    }
  } catch (error) {
    $output12.textContent = `Error: ${error.message}`;
  }
}

// 13. Challenge: Vowel Extractor - Takes a string and returns an array of all vowels found—using only match() with a regular expression.
function thirteen() {
  const $input13 = d.getElementById("input13");
  const $output13 = d.getElementById("output13");
  const str = $input13.value.trim();
  try {
    if (str.length === 0) {
      $output13.textContent = "The input cannot be an empty string";
      return;
    }
    const vowels = str.match(/[aeiou]/gi);
    if (vowels) {
      $output13.textContent = `Vowels found: ${vowels}`;
    } else {
      $output13.textContent = "No vowels found in the string.";
    }
  } catch (error) {
    $output13.textContent = `Error: ${error.message}`;
  }
}

// 14. Challenge: All Occurrences Finder - Takes a string containing several email addresses mixed in with other text. Your task is to extract all the email addresses using only matchAll().
function fourteen() {
  const $input14 = d.getElementById("input14");
  const $output14 = d.getElementById("output14");
  const str = $input14.value.trim();
  try {
    if (str.length === 0) {
      $output14.textContent = "The input cannot be an empty string";
      return;
    }
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = Array.from(str.matchAll(emailPattern), (m) => m[0]);
    console.log(emails);
    if (emails.length > 0) {
      $output14.textContent = `Email addresses found: ${emails.join(", ")}`;
    } else {
      $output14.textContent = "No email addresses found in the string.";
    }
  } catch (error) {
    $output14.textContent = `Error: ${error.message}`;
  }
}

// 15. Challenge: strings are canonically equivalent - Compare two strings as canonically equivalent using only normalize() Ex: 'café', 'cafe\u0301'
function fifteen() {
  const $input15a = d.getElementById("input15a");
  const $input15b = d.getElementById("input15b");
  const $output15 = d.getElementById("output15");
  const str1 = $input15a.value.trim();
  const str2 = $input15b.value.trim();
  try {
    if (str1.length === 0 || str2.length === 0) {
      $output15.textContent = "Both inputs cannot be empty strings.";
      return;
    }
    const normalizedStr1 = str1.normalize();
    const normalizedStr2 = str2.normalize();
    if (normalizedStr1 === normalizedStr2) {
      $output15.textContent = `"${str1}" and "${str2}" are canonically equivalent.`;
    } else {
      $output15.textContent = `"${str1}" and "${str2}" are not canonically equivalent.`;
    }
  } catch (error) {
    $output15.textContent = `Error: ${error.message}`;
  }
}

// 16. Challenge: Pad End - Takes a string and pads it to a specified length using only padEnd() with a character of your choice.
function sixteen() {
  const $input16 = d.getElementById("input16");
  const $length16 = d.getElementById("length16");
  const $char16 = d.getElementById("char16");
  const $output16 = d.getElementById("output16");
  const str = $input16.value.trim();
  const length = parseInt($length16.value.trim());
  const char = $char16.value.trim();
  try {
    if (str.length === 0 || isNaN(length) || char.length === 0) {
      $output16.textContent =
        "Invalid input. Please provide a valid string, length, and character.";
      return;
    }
    if (length < str.length) {
      $output16.textContent =
        "The specified length is less than the string length.";
      return;
    }
    const paddedStr = str.padEnd(length, char);
    $output16.textContent = `Padded string: "${paddedStr}"`;
  } catch (error) {
    $output16.textContent = `Error: ${error.message}`;
  }
}

// 17. Challenge: Pad start - Takes a string and pads it to a specified length using only padStart() with a character of your choice.
function seventeen() {
  const $input17 = d.getElementById("input17");
  const $length17 = d.getElementById("length17");
  const $char17 = d.getElementById("char17");
  const $output17 = d.getElementById("output17");
  const str = $input17.value.trim();
  const length = parseInt($length17.value.trim());
  const char = $char17.value.trim();
  try {
    if (str.length === 0 || isNaN(length) || char.length === 0) {
      $output17.textContent =
        "Invalid input. Please provide a valid string, length, and character.";
      return;
    }
    if (length < str.length) {
      $output17.textContent =
        "The specified length is less than the string length.";
      return;
    }
    const paddedStr = str.padStart(length, char);
    $output17.textContent = `Padded string: "${paddedStr}"`;
  } catch (error) {
    $output17.textContent = `Error: ${error.message}`;
  }
}

// 18. Challenge: Repeat - Takes a string and a number, and returns the string repeated that many times using only repeat().
function eighteen() {
  const $input18 = d.getElementById("input18");
  const $count18 = d.getElementById("count18");
  const $output18 = d.getElementById("output18");
  const str = $input18.value.trim();
  const count = parseInt($count18.value.trim());
  try {
    if (str.length === 0 || isNaN(count) || count < 0) {
      $output18.textContent =
        "Invalid input. Please provide a valid string and a non-negative number.";
      return;
    }
    const repeatedStr = str.repeat(count);
    $output18.textContent = `Repeated string: "${repeatedStr}"`;
  } catch (error) {
    $output18.textContent = `Error: ${error.message}`;
  }
}
