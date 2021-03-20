#include <stdio.h>
/**
 * main - Entry point
 * Return: 0 on success
 *
 * Write a C program to print the numbers from the lowest to the highest
 * (inclusive) and the sum of consecutive integers from a given pair of
 * numbers.
 */
int main(void)
{
	int n1, n2, sum = 0, lowest, highest, n;

	printf("Input a pair of numbers\nInput first number of the pair: ");
	scanf("%d", &n1);
	printf("Input second number of the pair: ");
	scanf("%d", &n2);
	if (n1 > n2)
	{
		lowest = n2;
		highest = n1;
	} else
	{
		lowest = n1;
		highest = n2;
	}
	printf("List of odd numbers:\n");
	for (n = lowest; n <= highest; n++)
	{
		if (n % 2 != 0)
		{
			sum += n;
			printf("%d\n", n);
		}
	}
	printf("Sum = %d\n", sum);
	return (0);
}

