/**
 * Dado un array de letras, solicita un número de DNI y calcula que
 * letra le corresponde. El número no puede ser negativo ni tener más
 * de 8 dígitos. La posición de la letra es el resultado del módulo del número
 * introducido entre 23
 */
const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
const dniNumber = prompt(`Enter a DNI number: \n(Greater than zero and minimum eight digits)`);
if (dniNumber < 1 || dniNumber.length < 8) {
    console.log(`error`);
}
else {
    const number = parseInt(dniNumber);
    const letter = number % 23;
    console.log(`To the DNI number "${dniNumber}", the letter "${letters[letter]}" corresponds`);
    console.log(`The complete DNI is: ${dniNumber}${letters[letter]}.`);
}