/* Operadores
Mostrar calificación final según siguientes porcentajes:
55% del promedio de sus 3 clasificaciones parciales
30% de la calificación del examen final
15% de la calificación de un trabajo final */
#include <stdio.h>
int main() {
    float p1, p2, p3, ef, tf, cf;
    printf("Calificación primer parcial\t");
    scanf("%f", &p1);
    printf("Calificación segundo parcial\t");
    scanf("%f", &p2);
    printf("Calificación tercer parcial\t");
    scanf("%f", &p3);
    printf("Calificación examen final\t");
    scanf("%f", &ef);
    printf("Calificación trabajo final\t");
    scanf("%f", &tf);
    cf = (((p1 + p2 + p3) / 3) * 0.55) + (ef * 0.30) + (tf * 0.15);
    printf("Calificación final:\t%f\n", cf);
    return 0;
}