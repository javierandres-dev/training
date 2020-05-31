/* Operadores
Áreas de trapecios */
#include <stdio.h>
int main() {
    float b1, b2, h, a;
    printf("Base mayor: ");
    scanf("%f", &b1);
    printf("Base menor: ");
    scanf("%f", &b2);
    printf("Altura: ");
    scanf("%f", &h);
    a = (b1 + b2) / 2 * h;
    printf("Área del trapecio: %f\n", a);
    return 0;
}