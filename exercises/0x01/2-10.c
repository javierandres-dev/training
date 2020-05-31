/* Condicionales
Calcular el total a pagar por camisas, si compran 3 camisas o más,
descuento del 20%, si son menos de 3, descuento del 10%. */
#include <stdio.h>
int main() {
    int price = 10, amount, discount, total;
    printf("Cantidad de camisas compradas: ");
    scanf("%d", &amount);
    if (amount >= 3) {
        price = price * amount;
        discount = price * 0.20;
        total = price - discount;
    }
    else {
        price = price * amount;
        discount = price * 0.10;
        total = price - discount;
    }
    printf("Cantidad:\t%d\nSubtotal:\t%d\nDescuento:\t%d\nTotal:\t%d\n",
    amount, price, discount, total);
    return 0;
}