/* Ciclos
Serie Fibonacci */
#include <stdio.h>
int main()
{
	int elem, i, x = 0, y = 1, z = 1;
	printf("Ingrese número de elementos: ");
	scanf("%d", &elem);
	printf("Serie Fibonacci:\n");
	for (i = 0; i < elem; i++)
	{
		printf("%d", z);
		if (i == elem - 1)
		{
			printf("\n");
		}
		else
		{
			printf(", ");
		}
		z = x + y;
		x = y;
		y = z;
	}
	return 0;
}
