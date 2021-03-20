/* Write a C program that accepts two integers from the user and calculate the
   product of the two integers. */
#include <stdio.h>
int main()
{
	int a;
	int b;
	int mul;

	printf("Input the first integer: ");
	scanf("%d", &a);
	printf("Input the second integer: ");
	scanf("%d", &b);
	mul = a * b;
	printf("Product of the above two integers = %d\n", mul);
	return 0;
}
