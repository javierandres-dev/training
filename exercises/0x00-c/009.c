/* Write a C program that accepts two integers from the user and calculate the
   sum of the two integers. */
#include <stdio.h>
int main()
{
	int a;
	int b;
	int sum;

	printf("Input the first integer: ");
	scanf("%d", &a);
	printf("Input the second integer: ");
	scanf("%d", &b);
	sum = a + b;
	printf("Sum of the above two integers = %d\n", sum);
	return 0;
}
