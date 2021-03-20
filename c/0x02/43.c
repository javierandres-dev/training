/**
 * main - Entry point
 * Return: 0 on success
 *
 * Write a C program that reads two integers p and q, print p number of lines
 * in a sequence of 1 to q in a line.
 */
#include <stdio.h>
int main(void)
{
	int p, q, i = 0, j, c = 1;

	printf("Input number of lines: ");
	scanf("%i", &p);
	printf("Number of characters in a line: ");
	scanf("%i", &q);
	while (i < p)
	{
		for (j = 0; j < q; j++)
		{
			printf("%i ", c);
			c++;
		}
		printf("\n");
		i++;
	}
	return (0);
}
