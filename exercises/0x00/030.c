/* Write a C program to find and print the square of each
   one of the even values from 1 to a specified value. */
#include <stdio.h>
int main()
{
	int n, result, i;

	n = 8;
	printf("List of square of each one of the even values from 1 to a %d :\n", n);
	i = 0;
	while(i <= n)
	{
		if(i > 0 && i % 2 == 0)
		{
			result = i * i;
			printf("%d^2 = %d\n", i, result);
		}
		i++;
	}
	return 0;
}
