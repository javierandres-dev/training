/* Condicionales
Determinar si una persona es mayor de edad
para que pueda votar */
#include <stdio.h>
int main() {
    int a;
    char *x;
    printf("Edad: ");
    scanf("%d", &a);
    if (a >= 18) {
        x = "Mayor de edad, si";
    }
    else
    {
        x = "Menor de edad, no";
    }
    printf("%s puede votar\n", x);
    return 0;
}