/* Condicionales
Calcular total a pagar, valor unitario 800 hasta 4 unidades,
si compra 5 o más, valor unitario 700. */
#include <stdio.h>
int main() {
    int price, amount, total;
    printf("Cantidad: ");
    scanf("%d", &amount);
    if (amount < 5) {
        price = 800,
        total = price * amount;
    }
    else {
        price = 700,
        total = price * amount;
    }
    printf("Precio unitario: %d\nTotal: %d\n", price, total);
    return 0;
}