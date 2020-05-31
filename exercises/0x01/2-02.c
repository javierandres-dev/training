/* Condicionales
Determinar si un alumno aprueba o reprueba un curso.
Si su promedio de tres calificaciones es mayor o igual a 3.2 aprueba
en caso contrario reprueba. */
#include <stdio.h>
int main() {
    float a, b, c, x;
    printf("Primer calificación: ");
    scanf("%f", &a);
    printf("Segunda calificación: ");
    scanf("%f", &b);
    printf("Tercer calificación: ");
    scanf("%f", &c);
    x = (a + b + c) / 3;
    if (x >= 3.2) {
        printf("Promedio final: %.1f Aprueba\n", x);
    }
    else {
        printf("Promedio final: %.1f Reprueba\n", x);
    }
    return 0;
}