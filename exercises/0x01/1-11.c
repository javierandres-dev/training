/* Operadores
Calcular la cantidad de segundos contenidos en
el número de horas, minutos y segundos ingresados */
#include <stdio.h>
int main() {
    int h, m, s, sc;
    printf("Horas: ");
    scanf("%d", &h);
    printf("Minutos: ");
    scanf("%d", &m);
    printf("Segundos: ");
    scanf("%d", &s);
    sc = h * 3600;
    sc = sc + (m * 60);
    sc = sc + s;
    printf("%d horas, %d minutos, %d segundos contienen %d segundos\n", h, m, s, sc);
    return 0;
}