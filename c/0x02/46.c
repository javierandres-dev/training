/**
 * main - Entry point
 * Return: 0 on success
 *
 * Write a C program to calculate the value of S where S = 1 + 3/2 + 5/4 + 7/8
 */
#include <stdio.h>
int main(void)
{
	float S = 0.00, numerator = 1, denominator = 1, quotient;

	while (numerator <= 7)
	{
		quotient = numerator / denominator;
		S += quotient;
		numerator += 2;
		denominator *= 2;
	}
	printf("Value of series: %.2f\n", S);
	return (0);
}
