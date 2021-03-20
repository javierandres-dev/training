/**
 * main - Entry point
 * Return: 0 on success
 *
 * Write a C program to print a number, it’s square and cube in a line,
 * starting from 1 and print n lines. Accept number of lines (n, integer) from
 * the user.
 */
#include <stdio.h>
int main(void)
{
	int n, square, cube, i = 1;

	printf("Input number of lines: ");
	scanf("%i", &n);
	while (i <= n)
	{
		square = i * i;
		cube = i * i * i;
		printf("%i %i %i\n", i, square, cube);
		i++;
	}
	return (0);
}
