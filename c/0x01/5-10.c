/* Vectores
Leer 10 números, almacenarlos en un vector y mostrar la media. */
#include <stdio.h>
int main()
{
	int arr[10];
	int i = 0, sum = 0, media = 0;
	while (i < 10)
	{
		printf("Ingrese un número: ");
		scanf("%d", &arr[i]);
		sum += arr[i];
		i++;
	}
	media = sum / 10;
	printf("La media de los números ingresados es: %d\n", media);
	return 0;
}
