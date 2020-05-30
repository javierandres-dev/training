/* Write a C program that reads three floating values and check if it is
   possible to make a triangle with them. Also calculate the perimeter of the
   triangle if the said values are valid. */
#include <stdio.h>
int main()
{
	float a, b, c, p;

	printf("Input the first number: ");
	scanf("%f", &a);
	printf("Input the second number: ");
	scanf("%f", &b);
	printf("Input the third number: ");
	scanf("%f", &c);
	if (((a + b) > c) && ((a + c) > b) && ((b + c) > a))
	{
		p = a + b + c;
		printf("Perimeter = %.1f\n", p);
	}
	else
	{
		printf("Values are not valid for a triangle.\n");
	}
	return 0;
}
