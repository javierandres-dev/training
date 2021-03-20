/* Juegos
Número mágico: Leer un número e indicar si corresponde a un número preasignado
aleatoriamente entre 1 y 100, indicar si está por debajo o por encima,
contabilizar intentos. */
#include <stdio.h>
#include <stdlib.h>
int main()
{
	srand(time(NULL));
	int x = rand() % 100 + 1;
	int n, count = 0;
	printf("Encuentra el número mágico (está entre 1 y 100).\n");
	while (1)
	{
		count++;
		printf("%d intento.\tIngresa un número: ", count);
		scanf("%d", &n);
		if (n == x)
		{
			printf("\t¡Bien! el número mágico es %d.\n", x);
			return 0;
		}
		else
		{
			printf("Inténtalo de nuevo, el número mágico es ");
			if (n > x)
			{
				printf("menor.\n");
			}
			else
			{
				printf("mayor.\n");
			}
		}
	}
	return 1;
}
