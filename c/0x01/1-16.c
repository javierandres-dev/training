/* Operadores
Volumen y área de una esfera */
#include <stdio.h>
int main() {
    const float pi = 3.14159;
    float v, a, r;
    printf("Radio de la esfera (cm): ");
    scanf("%f", &r);
    v = (4 * (pi * (r * r * r) / 3));
    printf("Volumen de la esfera:\t%f cm3\n", v);
    a = 4 * pi * (r * r);
    printf("Área de la esfera:\t%f cm2\n", a);
    return 0;
}