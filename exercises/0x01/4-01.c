/* Funciones
Calcular el cubo de un número */
#include <stdio.h>
int my_function(int n)
{
	int cn = n * n * n;
	printf("El cubo de %d es: %d\n", n, cn);
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
