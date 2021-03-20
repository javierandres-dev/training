/* Funciones
Ingresar un número y decir si es par o impar */
#include <stdio.h>
int my_func(int x)
{
	if (x % 2 == 0)
	{
		return 0;
	}
	return 1;
}
int main()
{
	int n, r;
	printf("Ingrese un número: ");
	scanf("%d", &n);
	r = my_func(n);
	if (r == 0)
	{
		printf("El número ingresado es par\n");
	}
	else
	{
		printf("El número ingresado es impar\n");
	}
	return 0;
}
