/**
 * main - Entry point
 * Return: 0 on success
 *
 * Write a C program to calculate the sum of all number not divisible by 17
 * between two given integer numbers.
 */
#include <stdio.h>
int main(void)
{
	int n1, n2, sum = 0, i;

	printf("Input the first integer: ");
	scanf("%i", &n1);
	printf("Input the second integer: ");
	scanf("%i", &n2);
	for (i = n1; i <= n2; i++)
	{
		if (i % 17 != 0)
			sum += i;
	}
	printf("%i\n", sum);
	return (0);
}
