/* Write a C program that reads an integer and check the specified range where
   it belongs. Print an error message if the number is negative and greater
   than 80. */
#include <stdio.h>
int main()
{
	int n;

	printf("Input an integer: ");
	scanf("%d", &n);
	if (n < 0)
	{
		printf("Error: The number is negative\n");
	}
	else if (n >= 0 && n <= 20)
	{
		printf("Range [0, 20]\n");
	}
	else if (n > 20 && n <= 40)
	{
		printf("Range [21, 40]\n");
	}
	else if (n > 40 && n <= 60)
	{
		printf("Range [41, 60]\n");
	}
	else if (n > 60 && n <= 80)
	{
		printf("Range [61, 80]\n");
	}
	else
	{
		printf("Error: The number is greater than 80\n");
	}
	return 0;
}
