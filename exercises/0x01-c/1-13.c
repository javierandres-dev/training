/* Operadores
Conocer porcentaje de mujeres y hombres de un grupo */
#include <stdio.h>
int main() {
    int m, h, t, xx, xy;
    printf("Cantidad de mujeres: ");
    scanf("%d", &m);
    printf("Cantidad de hombres: ");
    scanf("%d", &h);
    t = m + h;
    xx = (m * 100) / t;
    xy = (h * 100) / t;
    printf("%d%% son mujeres\n", xx);
    printf("%d%% son hombres\n", xy);
    return 0;
}