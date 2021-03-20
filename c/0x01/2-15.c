/* Condicionales
Leer dos números e imprimirlos en forma ascendente */
#include <stdio.h>
int main() {
    int a, b;
    printf("Primer número: ");
    scanf("%d", &a);
    printf("Segundo número: ");
    scanf("%d", &b);
    if (a > b) {
        printf("%d, %d\n", b, a);
    }
    else {
        printf("%d, %d\n", a, b);
    }
    return 0;
}