/* Condicionales
Ecuaciones de segundo grado
ax^2+bx+c=0 -> ecuación cuadrática
x=(-b+-sqrt(b^2-4ac)/2a) -> formula cuadrática
cuadrática -> que tiene dos respuestas\soluciones posibles
*/
#include <math.h>
#include <stdio.h>
int main() {
    int a, b, c, d, x1, x2;
    printf("Valor de 'a': ");
    scanf("%d", &a);
    printf("Valor de 'b': ");
    scanf("%d", &b);
    printf("Valor de 'c': ");
    scanf("%d", &c);
    d = b * b - 4 * a * c;
    if (d > 0) {
        x1 = (-b + sqrt(d)) / (2 * a);
        printf("x1 = %d\n", x1);
        x2 = (-b - sqrt(d)) / (2 * a);
        printf("x2 = %d\n", x2);
    }
    else {
        printf("La ecuación no tiene valor real\n");
    }
    return 0;
}