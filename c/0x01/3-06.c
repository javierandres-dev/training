/* Ciclos
Sumar 1-2+3-4+5-6... */
#include <stdio.h>
int main()
{
    int x, i;
    int n = 0, sum = 0, sum1 = 0, sum2 = 0;
    printf("Número de elementos: ");
    scanf("%d", &x);
    for (i = 1; i <= x; i++)
    {
        if (i % 2 == 0)
        {
            n = i * -1;
            sum1 += n;
        }
        else
        {
            sum2 += i;
        }
        sum = sum1 + sum2;
    }
    printf("El resultado de la suma es: %d\n", sum);
    return 0;
}