/* Ciclos
Suma de números pares desde 1 hasta n */
#include <stdio.h>
int main()
{
	int n, i, e, c;
	printf("Introduce un número: ");
	scanf("%d", &n);
	i = 1;
	e = 0;
	c = 0;
	while(i <= n)
	{
		if (i % 2 == 0)
		{
			e += i;
			c += 1;
		}
		i++;
	}
	printf("Hay %d números pares desde 1 hasta %d, suman: %d\n", c, n, e);
	return 0;
}
