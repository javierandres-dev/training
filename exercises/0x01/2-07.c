/* Condicionales
Calcular salario semanal, según:
Si trabaja 40 horas o menos, se le paga 16 por hora,
Si trabaja más de 40 horas, se le paga 16 por hora las primeras 40 horas y
20 por cada hora extra */
#include <stdio.h>
int main() {
    float h, x, y, z;
    printf("Horas trabajadas en la semana: ");
    scanf("%f", &h);
    if (h <= 0) {
        printf("Hora no válida\n");
    }
    else if (h > 0 && h <= 40) {
        x = 16 * h;
        printf("Salario semana:\t$%.2f\n", x);
    }
    else {
        x = 16 * 40;
        y = 20 * (h - 40);
        z = x + y;
        printf("Salario semana:\t$%.2f\n", z);
    }
    return 0;
}
