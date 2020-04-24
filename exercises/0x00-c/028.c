/* Write a C program that read 5 numbers and counts the number of
   positive numbers and print the average of all positive values. */
#include <stdio.h>
int main()
{
	int numbers[5], i, p = 0, sum = 0;
	float ave;

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
		if(numbers[i] > 0)
		{
			p++;
			sum += numbers[i];
		}
	}
	ave = sum / p;
	printf("Number of positive numbers: %d\n", p);
	printf("Average value of the said positive numbers: %.2f\n", ave);

	return 0;
}
