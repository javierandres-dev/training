/* Funciones
Calcular cuál es el número menor de dos números enteros. */
#include <stdio.h>
int my_function(int a, int b)
{
	if (a == b)
	{
		printf("Los dos números son iguales\n");
	}
	else
	{
		if (a > b)
		{
			printf("El segundo número es menor que el primer número\n");
		}
		else
		{
			printf("El primer número es menor que el segundo número\n");
		}
	}
	return 0;
}
int main()
{
	int a, b;
	printf("Ingrese primer número: ");
	scanf("%d", &a);
	printf("Ingrese segundo número: ");
	scanf("%d", &b);
	my_function(a, b);
	return 0;
}
