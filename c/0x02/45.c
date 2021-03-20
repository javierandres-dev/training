/**
 * main - Entry point
 * Return: 0 on success
 *
 * Write a C program to calculate the value of S
 * where S = 1 + 1/2 + 1/3 + ….. + 1/50.
 */
#include <stdio.h>
int main(void)
{
	float S = 1.00;
	int i = 2;

	while (i <= 50)
	{
		S += 1.00 / i;
		i++;
	}
	printf("Value of S: %.2f\n", S);
	return (0);
}
