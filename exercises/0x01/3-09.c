/* Ciclos
Factorial de un número */
#include <stdio.h>
int main()
{
	int x, i, factorial;
	printf("Ingrese un número: ");
	scanf("%d", &x);
	i = 1;
	factorial = 1;
	while(i <= x)
	{
		factorial *= i;
		i++;
	}
	printf("El factorial de %d es: %d\n", x, factorial);
	return 0;
}
