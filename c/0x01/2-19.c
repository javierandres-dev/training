/* Condicionales
Pedir 3 números y detectar si
se han introducido en orden creciente */
#include <stdio.h>
int main() {
    int a, b, c;
    char *check = "";
    printf("Primer número: ");
    scanf("%d", &a);
    printf("Segundo número: ");
    scanf("%d", &b);
    printf("Tercer número: ");
    scanf("%d", &c);
    if (a < b && b < c) {
        check = "si";
    }
    else {
        check = "no";
    }
    printf("Los números introducidos %s están en orden creciente\n", check);
    return 0;
}