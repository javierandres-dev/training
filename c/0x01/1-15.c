/* Operadores
Tres inversionistas, cada uno invierte una cantidad distinta,
obtener el porcentaje de cada uno respecto al total invertido */
#include <stdio.h>
int main() {
    int a, b, c, t, x;
    printf("Cantidad primer inversionista: ");
    scanf("%d", &a);
    printf("Cantidad segundo inversionista: ");
    scanf("%d", &b);
    printf("Cantidad tercer inversionista: ");
    scanf("%d", &c);
    t = a + b + c;
    printf("Total invertido:\t%d\n", t);
    x = (a * 100) / t;
    printf("Primer inversionista:\t%d%%\n", x);
    x = (b * 100) / t;
    printf("Segundo inversionista:\t%d%%\n", x);
    x = (c * 100) / t;
    printf("Tercer inversionista:\t%d%%\n", x);
    return 0;
}