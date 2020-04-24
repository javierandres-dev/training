/* Ciclos
Calcular todos los multiplos de 5 desde 1 hasta n */
#include <stdio.h>
int main() {
    int n, i = 1, result = 0;
    printf("Número: ");
    scanf("%d", &n);
    while (i <= n) {
        if (i % 5 == 0) {
            printf("%d es multiplo de 5\n", i);
        }
        i++;
    }
    return 0;
}