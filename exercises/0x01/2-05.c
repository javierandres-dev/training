/* Condicionales
Dado 3 números, calcular el mayor */
#include <stdio.h>
int main() {
    int a, b, c, x;
    printf("Primer número: ");
    scanf("%d", &a);
    printf("Segundo número: ");
    scanf("%d", &b);
    printf("Tercer número: ");
    scanf("%d", &c);
    if (a > b) {
        if (a > c) {
            x = a;
        }
        else {
            x = c;
        }
    }
    else if (b > c) {
        x = b;
    }
    else {
        x = c;
    }
    printf("El número mayor es: %d\n", x);
    return 0;
}