/* Ciclos
Calcular la media aritmética de x números,
se dejarán de solicitar números hasta que se introduzca el cero */
#include <stdio.h>
#include <stdbool.h>
int main()
{
	int x = 0, n, sn, ma;
	bool i = true;
	printf("se dejarán de solicitar números hasta que introduzca el cero\n");
	while (i)
	{
		printf("Ingrese un número: ");
		scanf("%d", &n);
		sn += n;
		if (n == 0 && x == 0)
		{
			printf("No ingresaste ningún número antes de introducir cero\n");
			return 1;
		}
		x += 1;
		if (n == 0 && x > 0)
		{
			x -= 1;
			i = false;
		}
	}
	ma = sn / x;
	printf("la media aritmética es %d\n", ma);
	return 0;
}
