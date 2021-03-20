/* Condicionales
Calcular, si el valor de la compra supera los 1000, 20% de descuento */
#include <stdio.h>
int main() {
    int value, discount, total;
    printf("Valor de la compra: ");
    scanf("%d", &value);
    if (value > 1000) {
        discount = 0.20 * value;
        total = value - discount;
    }
    else {
        discount = 0;
        total = value - discount;
    }
    printf("Descuento: %d\nTotal: %d\n", discount, total);
    return 0;
}