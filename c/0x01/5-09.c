/* Vectores
Llenar un vector con los primeros 100 números pares y mostrar su suma. */
#include <stdio.h>
int main()
{
	int arr[100];
	int i = 0, n = 2, sum = 0;
	while (n <= 200)
	{
		if (n % 2 == 0)
		{
			arr[i] = n;
			i++;
		}
		n++;
	}
	i = 0;
	while (i < 100)
	{
		sum += arr[i];
		i++;
	}
	printf("La suma de los primeros 100 números pares es: %d\n", sum);
	return 0;
}
