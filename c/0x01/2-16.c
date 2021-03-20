/* Condicionales
Simular el lanzamiento de una moneda */
#include <time.h>
#include <stdlib.h>
#include <stdio.h>
int main() {
    int i, x;
    srand(time(0));
    for (i = 0; i < 1; i++)
    {
        x = rand();
        if (x % 2 == 0) {
            printf("cara\n");
        }
        else {
            printf("sello\n");
        }
    }
    return 0;
}