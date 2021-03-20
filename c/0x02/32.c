/* Write a C program to print all numbers between 1 to 100
which divided by a specified number and the remainder will be 3. */
#include <stdio.h>
int main() {
	int n, i;
	printf("Input an integer:");
	scanf("%d", &n);
	for (i = 1; i <= 100; i++)
	{
		if (i % n == 3)
		{
			printf("%d\n", i);
		}
	}
	return 0;
}
