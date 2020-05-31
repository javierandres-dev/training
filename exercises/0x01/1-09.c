/* Operadores
Calcular nuevo salario con un incremento del 25% sobre salario anterior */
#include <stdio.h>
int main() {
    int sa, sn;
    float i = 0.25;
    printf("Salario anterior: ");
    scanf("%d", &sa);
    sn = sa + (sa * i);
    printf("Nuevo salario con incremento del 25%%: %d\n", sn);
    return 0;
}