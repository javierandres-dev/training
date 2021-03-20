/* Ciclos
Hacer una suma de los 5 primeros números */
#include <stdio.h>
int main() {
    int i, result = 0;
    for (i = 1; i <= 5; i++) {
        result += i;
    }
    printf("El resultador de la suma es: %d (for)\n", result);
    result = 0;
    i = 1;
    while (i <= 5) {
        result += i;
        i++;
    }
    printf("El resultador de la suma es: %d (while)\n", result);
    return 0;
}