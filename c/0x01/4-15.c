/* Funciones
Determinar si un número es divisible por otro e imprimir
"Divisible", en caso contrario "No divisible". */
#include <stdio.h>
int my_func(int x, int y)
{
	int r = x % y;
	if (r == 0)
	{
		printf("Divisible\n");
	}
	else
	{
		printf("No divisible\n");
	}
	return 0;
}
int main()
{
	int a, b;
	printf("Ingrese primer número: ");
	scanf("%d", &a);
	printf("Ingrese segundo entero: ");
	scanf("%d", &b);
	my_func(a, b);
	return 0;
}
