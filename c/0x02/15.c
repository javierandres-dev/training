// Write a C program to calculate the distance between the two points.
#include <stdio.h>
#include <math.h>
int main()
{
	int x1;
	int y1;
	int x2;
	int y2;
	float result;

	printf("Input x1: ");
	scanf("%d", &x1);
	printf("Input y1: ");
	scanf("%d", &y1);
	printf("Input x2: ");
	scanf("%d", &x2);
	printf("Input y2: ");
	scanf("%d", &y2);
	result = sqrt(pow((x2 - x1), 2)  + pow((y2 - y1), 2));
	printf("Distance between the said points: %.4f\n", result);
	return 0;
}
