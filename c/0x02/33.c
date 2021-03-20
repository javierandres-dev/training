/* Write a C program that accepts some integers from the user
and find the highest value and the input position. */
#include <stdio.h>
int main() {
	int amount = 5;
	int i = 0, highest = 0, number, position;

	printf("Input %d integers:\n", amount);
	while(i < amount)
	{
		scanf("%d", &number);
		if (number > highest)
		{
			highest = number;
			position = i + 1;
		}
		i++;
	}
	printf("Highest value: %d\n", highest);
	printf("Position: %d\n", position);
	return 0;
}
