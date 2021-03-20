/* Funciones
Determinar e imprimir el valor absoluto de un número entero. */
#include <stdio.h>
int my_func(int x)
{
	if (x == 0 || x > 0)
	{
		printf("El valor absoluto de %d es %d\n", x, x);
	}
	else
	{
		printf("El valor absoluto de %d es %d\n", x, x * -1);
	}
	return 0;
}
int main()
{
	int n;
	printf("Ingrese un número entero: ");
	scanf("%d", &n);
	my_func(n);
	return 0;
}
