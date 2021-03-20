/**
 * main - Entry point
 * Return: 0 on success
 *
 * Write a program that reads two numbers and divide the first number by
 * second number. If the division not possible print "Division not possible".
 */
#include <stdio.h>
int main(void)
{
	int n1, n2;
	float result;

	printf("Enter two numbers, (divisor and dividend):\nInput divisor: ");
	scanf("%d", &n1);
	printf("Input dividend: ");
	scanf("%d", &n2);
	if (n2 == 0)
		printf("Division not possible\n");
	else
	{
		result = n1 / n2;
		printf("%d \u00F7 %d = %.1f\n", n1, n2, result);
	}
	return (0);
}
