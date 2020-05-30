/* Write a C program that read 5 numbers and
   sum of all odd values between them. */
#include <stdio.h>
int main()
{
	int numbers[5], sum, i;
	printf("Input the first number: ");
	scanf("%d", &numbers[0]);
	printf("Input the second number: ");
	scanf("%d", &numbers[1]);
	printf("Input the third number: ");
	scanf("%d", &numbers[2]);
	printf("Input the fourth number: ");
	scanf("%d", &numbers[3]);
	printf("Input the fifth number: ");
	scanf("%d", &numbers[4]);
	for(i = 0; i < 5; i++)
	{
		if(numbers[i] % 2 != 0)
			sum += numbers[i];
	}
	printf("Sum of all odd values: %d\n", sum);
	return 0;
}
