/* Condicionales
Mostrar el resultado de la suma de dos números enteros,
si esta supera a 10 */
#include <stdio.h>
int main() {
    int a, b, c;
    printf("Primer número: ");
    scanf("%d", &a);
    printf("Segundo número: ");
    scanf("%d", &b);
    c = a + b;
    if (c > 10) {
        printf("%d + %d = %d\n", a, b, c);
    }
    return 0;
}