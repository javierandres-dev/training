/* Write a C program to check a given integer is positive even, negative even,
   positive odd or negative odd. Print even if the number is 0. */
#include <stdio.h>
int main()
{
	int n;

	printf("Input an integer: ");
	scanf("%d", &n);
	if(n > 0)
	{
		if(n % 2 == 0)
			printf("positive even number\n");
		else
			printf("positive odd number\n");
	}
	else if(n < 0)
	{
		if(n % 2 == 0)
			printf("negative even number\n");
		else
			printf("negative odd number\n");
	}
	else
		printf("The number is zero\n");
	return 0;
}
