/* Write a C program that read 5 numbers and sum of all odd values between
   them. */
#include <stdio.h>
int main()
{
	int n1, n2, n3, n4, n5;
	int oddsum;

	printf("Input the first number: ");
	scanf("%d", &n1);
	if(n1 % 2 != 0)
	{
		oddsum += n1;
	}
	printf("Input the second number: ");
	scanf("%d", &n2);
	if(n2 % 2 != 0)
	{
		oddsum += n2;
	}
	printf("Input the third number: ");
	scanf("%d", &n3);
	if(n3 % 2 != 0)
	{
		oddsum += n3;
	}
	printf("Input the fourth number: ");
	scanf("%d", &n4);
	if(n4 % 2 != 0)
	{
		oddsum += n4;
	}
	printf("Input the fifth number: ");
	scanf("%d", &n5);
	if(n5 % 2 != 0)
	{
		oddsum += n5;
	}
	printf("Sum of all odd values: %d\n", oddsum);
	return 0;
}
