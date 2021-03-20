/* Vectores
Llenar un vector con los 10 primeros números enteros
y mostrarlos en orden ascendente. */
#include <stdio.h>
int main()
{
	int arr[10];
	int length = sizeof(arr) / sizeof(arr[0]);
	int i = 0;
	while (i < length)
	{
		arr[i] = i + 1;
		i++;
	}
	for (i = 0; i < length; i++)
	{
		printf("%d\n", arr[i]);
	}
	return 0;
}
