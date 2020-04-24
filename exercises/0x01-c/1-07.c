/* Operadores
Porciento de descuento en una tienda */
#include <stdio.h>
int main() {
    float a, b, x;
    printf("Total compra: ");
    scanf("%f", &a);
    b = a * 15 / 100;
    x = a - b;
    printf("Precio final incluyendo el 15%% de descuento: %f\n", x);
    b = a * 0.15;
    x = a - b;
    printf("Precio final incluyendo el 15%% de descuento: %f\n", x);
    return 0;
}