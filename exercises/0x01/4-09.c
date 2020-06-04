/* Funciones
Recibir un número y retornar 1 si es un número primo o 0 en caso contrario. */
#include <stdio.h>
int my_function(int n)
{
	int i = 1, count = 0;
	while (i <= n)
	{
		if (n % i == 0)
		{
			count++;
		}
		i++;
	}
	if (count > 2)
	{
		return 0;
	}
	return 1;
}
int main()
{
	int n, x;
	printf("Ingrese un número: ");
	scanf("%d", &n);
	x = my_function(n);
	printf("%d\n", x);
	return 0;
}
