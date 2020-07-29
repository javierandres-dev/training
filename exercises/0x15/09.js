/**
 * Solicitar al usuario una palabra y mostrar por consola el número
 * de consonantes, vocales y longitud de la palabra.
 */
const word = prompt('Enter a word: ');
const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
const vowels = 'aAeEiIoOuU';
let countVowels = 0;
let countConsonants = 0;
const size = word.length;
for (let character of word) {
    for (let consonant of consonants) {
        if (character === consonant) {
            countConsonants += 1;
        }
    }
    for (let vowel of vowels) {
        if (character === vowel) {
            countVowels += 1;
        }
    }
}
console.log(`The word "${word}" have ${countVowels} vowel(s),
${countConsonants} consonant(s) and a length of the ${size} character(s).`);