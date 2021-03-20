/* Condicionales
Dados dos números, imprimir solo los positivos */
#include <stdio.h>
int main() {
    int a, b;
    printf("Primer número: ");
    scanf("%d", &a);
    printf("Segundo número: ");
    scanf("%d", &b);
    if (a > 0 && b > 0) {
        printf("%d\n%d\n", a, b);
    }
    else
    {
        if (a > 0 || b > 0) {
            if (a > 0) {
                printf("%d\n", a);
            }
            else
            {
                printf("%d\n", b);
            }
            
        }
    }
    return 0;
}