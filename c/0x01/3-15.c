/* Ciclos
Mostrar la suma de todos los números que hayan entre n y m,
y controlar que cumplan orden creciente */
#include <stdio.h>
int main()
{
	int n, m, i, s;
	printf("Ingrese el primer número: ");
	scanf("%d", &n);
	printf("Ingrese el segundo número: ");
	scanf("%d", &m);
	if (n < m)
	{
		i = n;
		while(i <= m)
		{
			s += i;
			i++;
		}
		printf("La suma de los números comprendidos entre n y m es: %d\n", s);
	}
	else
	{
		printf("No cumple orden cerciente.\n");
	}
	return 0;
}
