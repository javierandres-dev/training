/* Vectores
leer 5 números y guardarlos en un vector, luego, copiarlos a otro vector
multiplicados por 2 y mostrar el segundo vector. */
#include <stdio.h>
int main()
{
	int arr1[5];
	int arr2[5];
	int i;
	i = 0;
	while (i < 5)
	{
		printf("Ingrese un número: ");
		scanf("%d", &arr1[i]);
		i++;
	}
	for (i = 0; i < 5; i++)
	{
		arr2[i] = arr1[i] * 2;
	}
	for (i = 0; i < 5; i++)
	{
		printf("%d\n", arr2[i]);
	}
	return 0;
}
