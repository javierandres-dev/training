/* Ciclos
Programa que calcula la suma de los cuadrados de los 100 primeros números */
#include <stdio.h>
int main()
{
	int i, c, sc;
	for (i = 0; i <= 100; i++)
	{
		c = i * i;
		sc += c;
	}
	printf("La suma de los primeros 100 cuadrados es: %d\n", sc);
	return 0;
}
