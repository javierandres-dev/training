/* Condicionales
Obtener descuento mediante número al azar,
si el número es menor a 74, descuento del 15%,
si el número es mayor o igual a 74, descuento del 20%,
obtener cuanto dinero se descuenta del total de la compra. */
#include <time.h>
#include <stdlib.h>
#include <stdio.h>
int main() {
    int n, discount, subtotal, total;
    char *porcentage;
    int i, lower = 1, upper = 100, count = 1;
    printf("Valor de la compra: ");
    scanf("%d", &subtotal);
    srand(time(0));
    //srand(time(NULL)); 
    for (i = 0; i < count; i++) {
        n = (rand() % (upper - lower + 1)) + lower;
    }
    if (n >= 74) {
        porcentage = "%20";
        discount = 0.20 * subtotal;
        total = subtotal - discount;
    }
    else {
        porcentage = "%15";
        discount = 0.15 * subtotal;
        total = subtotal - discount;
    }
    printf("Número al azar:\t%d\nObtuvo un descuento del %s\n", n, porcentage);
    printf("Subtotal:\t%d\nDescuento:\t%d\nTotal:\t%d\n", subtotal, discount, total);
    return 0;
}