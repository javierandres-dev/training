/* Ciclos
Suma de factoriales */
#include <stdio.h>
int main()
{
	int x, fx, sf, i;
	printf("Ingrese un número: ");
	scanf("%d", &x);
	i = 1;
	fx = 1;
	while(i <= x)
	{
		fx *= i;
		i++;
	}
	printf("El factorial de %d es %d\n", x, fx);
	return 0;
}
