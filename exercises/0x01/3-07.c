/* Ciclos
Sumar pares, desde n hasta m */
#include <stdio.h>
int main()
{
    int n, m, i, sum = 0;
    printf("Valor de 'n': ");
    scanf("%d", &n);
    printf("Valor de 'm': ");
    scanf("%d", &m);
    for (i = 1; i <= m; i++)
    {
        if (i % 2 == 0)
        {
            sum += i;
        }
    }
    printf("La suma de los pares desde 'n' hasta 'm' es: %d\n", sum);
    return 0;
}