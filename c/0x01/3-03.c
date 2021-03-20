/* Ciclos
Pedir un número, si el número supera a 10,
multiplicar los 10 primeros números,
sino, sumarlos */
#include <stdio.h>
int main() {
    int n, i, result;
    char *operation;
    printf("Número: ");
    scanf("%d", &n);
    if (n > 10) {
        n = 10;
        result = 1;
        operation = "multiplicación";
        for (i = 1; i <= n; i++) {
            result *= i;
        }
    }
    else {
        i = 0;
        result = 0;
        operation = "suma";
        while (i <= n) {
            result += i;
            i++;
        }
    }
    printf("La %s de los %d primeros números es: %d\n", operation, n, result);
    return 0;
}