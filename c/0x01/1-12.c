/* Operadores
Obtener la media geométrica de tres números */
#include <stdio.h>
#include <math.h>
int main() {
    float n1, n2, n3, n, mg;
    printf("Primer número: ");
    scanf("%f", &n1);
    printf("Segundo número: ");
    scanf("%f", &n2);
    printf("Tercer número: ");
    scanf("%f", &n3);
    if (n1 < 0 || n2 < 0 || n3 < 0) {
        printf("Ningún número debe ser negativo\n");
    }
    else if (n1 == 0 || n2 == 0 || n3 == 0) {
        mg = 0;
        printf("Si algún número es 0, la media geométrica es %f\n", mg);
    }
    else {
        n = n1 * n2 * n3;
        mg = pow(n, (double)1/3);
        printf("La media geométrica es: %f\n", mg);
    }
    return 0;
}