/* Ciclos
Mostrar todos los números que hayan entre n y m,
y controlar que cumplan orden creciente */
#include <stdio.h>
int main()
{
	int n, m, i;
	printf("Ingrese el primer número: ");
	scanf("%d", &n);
	printf("Ingrese el segundo número: ");
	scanf("%d", &m);
	if (n < m)
	{
		i = n;
		while(i <= m)
		{
			printf("%d\n", i);
			i++;
		}
	}
	else
	{
		printf("No cumple orden cerciente.\n");
	}
	return 0;
}
