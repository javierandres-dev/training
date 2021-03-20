/* Write a C program that reads two integers
   and checks if they are multiplied or not. */
#include <stdio.h>
int main()
{
	int a, b, tmp;

	printf("Input the first number: ");
	scanf("%d", &a);
	printf("Input the second number: ");
	scanf("%d", &b);
	if(a > b)
	{
		tmp = a;
		a = b;
		b = tmp;
	}
	if(b % a == 0)
		printf("Multiplied!\n");
	else
		printf("Not multiplied!\n");
	return 0;
}
