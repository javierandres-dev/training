/* Operadores
Pedir dos números, sumarlos, restarlos, multiplicarlos y dividirlos */
#include <stdio.h>
int main() {
    int a, b, c;
    printf("Ingrese un número: ");
    scanf("%d", &a);
    printf("Ingrese un número: ");
    scanf("%d", &b);
    c = a + b;
    printf("%d + %d = %d\n", a, b, c);
    c = a - b;
    printf("%d - %d = %d\n", a, b, c);
    c = a * b;
    printf("%d x %d = %d\n", a, b, c);
    c = a / b;
    printf("%d / %d = %d\n", a, b, c);
    return 0;
}