/**
 * main - Entry point
 * Return: 0 on success
 *
 * Write a C program to check whether two numbers in a pair is in ascending
 * order or descending order.
 */
#include <stdio.h>
int main(void)
{
	int n1, n2;

	printf("Input a pair of numbers\nInput first number of the pair: ");
	scanf("%d", &n1);
	printf("Input second number of the pair: ");
	scanf("%d", &n2);
	if (n1 < n2)
		printf("The pair is in ascending order!\n");
	else if (n1 > n2)
		printf("The pair is in descending order!\n");
	else
		printf("The pair of numbers are equals!\n");
	return (0);
}
