/* Operadores
Convertir grados Célsius a grados Fahrenheit */
#include <stdio.h>
int main() {
    float c, f;
    printf("Grados Célsius: ");
    scanf("%f", &c);
    f = (c * 9 / 5) + 32;
    printf("%f grados Célsius equivales a %f grados Fahrenheit\n", c, f);
    return 0;
}