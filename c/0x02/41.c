/**
 * main - Entry point
 * Return: 0 on success
 *
 * Write a C program to print 3 numbers in a line, starting from 1 and print
 * n lines. Accept number of lines (n, integer) from the user.
 */
#include <stdio.h>
int main(void)
{
	int n, i = 1;

	printf("Input number of lines: ");
	scanf("%i", &n);
	while (i <= n * 3)
	{
		printf("%i ", i);
		if (i % 3 == 0)
			printf("\n");
		i++;
	}
	return (0);
}
