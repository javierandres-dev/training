/* Condicionales
Aplicar descuento según color:
1-Blanco -> 0%, 2-Verde -> 10%, 3-Amarillo -> 25%
4-Azul -> 50%, 5-Rojo -> 100% */
#include <time.h>
#include <stdlib.h>
#include <stdio.h>
int main() {
    int purchase, porcentage, discount, total, x;
    char *color;
    printf("Valor de la compra: $");
    scanf("%d", &purchase);
    srand(time(0));
    x = rand() % ((5 + 1) -1) + 1;
    if (x == 1) {
        color = "Blanco";
        porcentage = 0;
        discount = (porcentage * purchase) / 100;
        total = purchase - discount;
    }
    else {
        if (x == 2) {
            color = "Verde";
            porcentage = 10;
            discount = (porcentage * purchase) / 100;
            total = purchase - discount;
        }
        else {
            if (x == 3) {
                color = "Amarillo";
                porcentage = 25;
                discount = (porcentage * purchase) / 100;
                total = purchase - discount;
            }
            else {
                if (x == 4) {
                    color = "Azul";
                    porcentage = 50;
                    discount = (porcentage * purchase) / 100;
                    total = purchase - discount;
                }
                else {
                    if (x == 5) {
                        color = "Rojo";
                        porcentage = 100;
                        discount = (porcentage * purchase) / 100;
                        total = purchase - discount;
                    }
                    else {
                        printf("Oops!\n");
                        return 1;
                    }
                }
            }
        }
    }
    printf("Sacó el color:\t%s\nDescuento:\t%d%% = $%d\nTotal:\t\t$%d\n", color, porcentage, discount, total);
    return 0;
}