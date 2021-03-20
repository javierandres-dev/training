/**
 * main - Entry point
 * Return: 0 on success
 *
 * Write a C program to find all numbers which are dividing by 7 and the
 * remainder is equal to 2 or 3 between two given integer numbers.
 */
#include <stdio.h>
int main(void)
{
	int n1, n2, i;

	printf("Input the first integer: ");
	scanf("%i", &n1);
	printf("Input the second integer: ");
	scanf("%i", &n2);
	for (i = n1; i <= n2; i++)
	{
		if (i % 7 == 2 || i % 7 == 3)
			printf("%i\n", i);
	}
	return (0);
}
