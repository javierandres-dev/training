/* Ciclos
Suma de los n primeros números */
#include <stdio.h>
int main() {
    int n, i = 0, result = 0;
    printf("Número: ");
    scanf("%d", &n);
    while (i <= n) {
        result += i;
        i++;
    }
    printf("Las suma de los %d primeros números es: %d\n", n, result);
    return 0;
}