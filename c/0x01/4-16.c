/* Funciones
Solicitar 3 números distintos e indicar cuál de ellos es el menor. */
#include <stdio.h>
int my_func(int a, int b, int c)
{
	if (a == b || a == c || b == c)
	{
		printf("Los números deben ser distintos\n");
		return 1;
		
	}
	else
	{
		if (a < b)
		{
			if (a < c)
			{
				printf("El número menor es: %d\n", a);
			}
			else
			{
				printf("El número menor es: %d\n", c);
			}
		}
		else if (b < c)
		{
			printf("El número menor es: %d\n", b);
		}
		else
		{
			printf("El número menor es: %d\n", c);
		}
	}
	return 0;
}
int main()
{
	int a, b, c;
	printf("Ingrese el primer número: ");
	scanf("%d", &a);
	printf("Ingrese el segundo número: ");
	scanf("%d", &b);
	printf("Ingrese el tercer número: ");
	scanf("%d", &c);
	my_func(a, b, c);
	return 0;
}
