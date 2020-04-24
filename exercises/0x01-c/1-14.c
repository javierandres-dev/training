/* Operadores
Volumen y área de un cubo */
#include <stdio.h>
int main() {
    int v, a, la;
    printf("Longitud arista (cm): ");
    scanf("%d", &la);
    v = la * la * la;
    printf("Volumen del cubo: %d cm3\n", v);
    a = 6 * (la * la);
    printf("Área del cubo: %d cms\n", a);
    return 0;
}