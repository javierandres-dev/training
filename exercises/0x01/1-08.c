/* Operadores
Dadas las horas trabajadas de una persona y el valor por hora.
Calcular su salario e imprimirlo. */
#include <stdio.h>
int main() {
    int h, v, s;
    printf("Horas trabajadas: ");
    scanf("%d", &h);
    printf("Valor por hora: ");
    scanf("%d", &v);
    s = h * v;
    printf("Salario: %d\n", s);
    return 0;
}