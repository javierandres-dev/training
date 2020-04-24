/* Operadores
Hipotenusa de un triángulo rectangulo */
#include <stdio.h>
#include <math.h>
int main() {
    int c1, c2, h;
    printf("Cateto uno: ");
    scanf("%d", &c1);
    printf("Cateto dos: ");
    scanf("%d", &c2);
    h = sqrt((pow(c1, 2) + pow(c2, 2)));
    printf("Hipotenusa = %d\n", h);
    return 0;
}