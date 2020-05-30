// Write a C program that accepts three integers and find the maximum of three.
#include <stdio.h>
int main()
{
	int a, b, c, max;

	printf("Input the first integer: ");
	scanf("%d", &a);
	printf("Input the second integer: ");
	scanf("%d", &b);
	printf("Input the third integer: ");
	scanf("%d", &c);
	if(a > b)
	{
		if(a > c)
			max = a;
		else
			max = c;
	}
	else
	{
		if (b > c)
			max = b;
		else
			max = c;
	}
	printf("Maximum value of three integers: %d\n", max);
	return 0;
}
