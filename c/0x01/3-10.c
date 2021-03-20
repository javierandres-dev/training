/* Ciclos
Suma de factoriales */
#include <stdio.h>
int main()
{
	int x, fx, i, sf;
	printf("Ingrese un número: ");
	scanf("%d", &x);
	fx = 1;
	i = x;
	sf = 0;
	while(i > 0)
	{
		fx *= i;
		if (i != x)
		{
			sf += fx;
		}
		i--;
	}
	printf("El factorial de %d es %d\n", x, fx);
	printf("La suma de los factoriales %d es %d\n", x, sf);
	return 0;
}
