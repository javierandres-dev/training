/* Ciclos
Calcular todos los multiplos de 3 desde 1 hasta n */
#include <stdio.h>
int main() {
    int n, i, result = 0;
    printf("Número: ");
    scanf("%d", &n);
    for (i = 1; i <= n; i++) {
        if (i % 3 == 0) {
            printf("%d es multiplo de 3\n", i);
        }
    }
    return 0;
}