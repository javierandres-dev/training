/* Operadores
Calcular la media aritmética de tres números */
#include <stdio.h>
int main () {
    float a, b, c, x;
    printf("Primer número: ");
    scanf("%f", &a);
    printf("Segundo número: ");
    scanf("%f", &b);
    printf("Tercer número: ");
    scanf("%f", &c);
    x = (a + b + c) / 3;
    printf("La media es: %f\n", x);
    return 0;
}