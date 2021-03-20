/* Vectores
Leer 5 números, almacenarlos en un vector y mostrarlos en forma ascendente */
#include <stdio.h>
int main()
{
	int arr[5];
	int i, j, aux;
	i = 0;
	while (i <= 4)
	{
		printf("Ingrese un número: ");
		scanf("%d", &arr[i]);
		i++;
	}
	for (i = 0; i < 4; i++)
	{
		for (j = i +1; j <= 4; j++)
		{
			if (arr[i] < arr[j])
			{
				aux = arr[i];
				arr[i] = arr[j];
				arr[j] = aux;
			}
		}
	}
	for (i = 4; i >= 0; i--)
	{
		printf("%d\n", arr[i]);
	}
	return 0;
}
