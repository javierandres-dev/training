/* Ciclos
Imprimir la suma de todos los números impares que hay desde n hasta m,
y diga cuantos números hay */
#include <stdio.h>
int main()
{
	int n, m, i, so, c;
	printf("Ingrese el primer número: ");
	scanf("%d", &n);
	printf("Ingrese el segunto número: ");
	scanf("%d", &m);
	for (i = n; i <= m; i++)
	{
		if (i % 2 != 0)
		{
			so += i;
			c += 1;
		}
	}
	printf("Hay %d números impares desde %d hasta %d, y suman: %d\n", c, n, m, so);
	return 0;
}
