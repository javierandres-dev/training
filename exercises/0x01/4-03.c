/* Funciones
Recibir un número,
retornar -1 si es negativo, 1 si es positivo o 0 si es cero. */
#include <stdio.h>
int my_function(int n)
{
	if (n == 0)
	{
		printf("Número 0.  Return 0\n");
		return 0;
	}
	else
	{
		if (n > 0)
		{
			printf("Número positivo.  Return 1\n");
			return 1;
		}
		if (n < 0)
		{
			printf("Número negativo.  Return -1\n");
			return -1;
		}
	}
	printf("Oops!\n");
	return 0;
}
int main()
{
	int n;
	printf("Ingrese un número: ");
	scanf("%d", &n);
	my_function(n);
	return 0;
}
