/* Condicionales
Pedir 3 números e indicar si la multiplicación
de los dos primeros es igual al tercero */
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
    if (a * b == c) {
        check = "SI";
    }
    else {
        check = "NO";
    }
    printf("La multiplicación de los dos primeros %s es igual al tercero\n", check);
    return 0;
}