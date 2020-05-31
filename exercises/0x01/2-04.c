/* Condicionales
Determinar si un número es par, impar o cero */
#include <stdio.h>
int main() {
    int x;
    printf("Número: ");
    scanf("%d", &x);
    if (x == 0) {
        printf("El número es cero\n");
    }
    else if (x % 2 == 0) {
        printf("El número es par\n");
    }
    else
    {
        printf("El número es impar\n");
    }
    return 0;
}