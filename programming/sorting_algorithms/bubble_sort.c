#include <stdio.h>
#include <stdlib.h>
/**
 * print_array - Prints an array of integers
 *
 * @array: The array to be printed
 * @size: Number of elements in @array
 */
void print_array(const int *array, size_t size)
{
	size_t i;

	i = 0;
	while (array && i < size)
	{
		if (i > 0)
			printf(", ");
		printf("%d", array[i]);
		++i;
	}
	printf("\n");
}
/**
  * bubble_sort - function that sorts an array of integers
  * in ascending order using the Bubble sort algorithm
  * @array: is data
  * @size: is size data
  * Return: nothing
  */
void bubble_sort(int *array, size_t size)
{
	size_t i;
	size_t j;
	int buffer;

	if (array == NULL || size < 2)
	{
		return;
	}
	for (i = 0; i < size - 1; i++)
	{
		for (j = 0; j < size - 1 - i; j++)
		{
			if (array[j] > array[j + 1])
			{
				buffer = array[j];
				array[j] = array[j + 1];
				array[j + 1] = buffer;
				print_array(array, size);
			}
		}
	}
}
/**
 * main - Entry point
 * Return: Always 0
 */
int main(void)
{
	int array[] = {19, 48, 99, 71, 13, 52, 96, 73, 86, 7};
	size_t n = sizeof(array) / sizeof(array[0]);
	int i, j;

	print_array(array, n);
	printf("\n");
	bubble_sort(array, n);
	printf("\n");
	print_array(array, n);
	return (0);
}
