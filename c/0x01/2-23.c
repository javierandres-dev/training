/* Condicionales
Tomar dos números y decir si
ambos son pares o impares */
#include <stdio.h>
int main() {
    int n1, n2;
    char *a, *b;
    printf("Primer número: ");
    scanf("%d", &n1);
    if (n1 % 2 == 0) {
        a = "par";
    }
    else {
        a = "impar";
    }
    printf("Segundo número: ");
    scanf("%d", &n2);
    if (n2 % 2 == 0) {
        b = "par";
    }
    else {
        b = "impar";
    }
    if (a == b) {
        printf("Los dos son números %s\n", a);
    }
    else {
        printf("El primer número es %s y el segundo es %s\n", a, b);
    }
    return 0;
}