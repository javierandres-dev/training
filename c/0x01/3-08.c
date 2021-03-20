/* Ciclos
Determinar si un número es primo o no */
#include <stdio.h>
int main()
{
	int x, i, count = 0;
	printf("Ingrese un número: ");
	scanf("%d", &x);
	for (i = 1; i <= x; i++)
	{
		if (x % i == 0)
		{
			count++;
		}
	}
	if (count > 2)
	{
		printf("El número %d NO es un número primo\n", x);
	}
	else
	{
		printf("El número %d SI es un número primo\n", x);
	}
	return 0;
}
