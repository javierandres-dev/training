/* Vectores
Llenar un vector con los 10 primeros números enteros
y mostrarlos en orden descendente. */
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
	for (i = length - 1; i >= 0; i--)
	{
		printf("%d\n", arr[i]);
	}
	return 0;
}
