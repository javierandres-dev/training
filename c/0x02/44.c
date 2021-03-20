/**
 * main - Entry point
 * Return: 0 on success
 *
 * Write a C program to calculate the average marks of mathematics of some
 * students. Input 0 (excluding to calculate the average) or negative value to
 * terminate the input process.
 */
#include <stdio.h>
int main(void)
{
	float mark, sumMark = 0;
	short marks = 0;

	printf("Input 0 or negative value to terminate the input process\n");
	while (mark > 0)
	{
		printf("Input the mark: ");
		scanf("%f", &mark);
		sumMark += mark;
		if (mark > 0)
			marks++;
	}
	printf("Average: %.2f\n", sumMark / marks);
	return (0);
}
