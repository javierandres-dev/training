/* Condicionales
Pedir 3 números e indicar si el tercero
es igual a la suma del primero y el segundo */
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
    if (a + b == c) {
        check = "SI";
    }
    else {
        check = "NO";
    }
    printf("El tercer número %s es igual a la suma del primero y el segundo\n", check);
    return 0;
}