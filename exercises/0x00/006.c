/* Write a C program to compute the perimeter and area of a circle with a
   radius of 6 inches. */
#include <stdio.h>
int main()
{
	int radius = 6;
	const float pi = 3.14;
	float perimeter = 2 * pi * radius;
	float area = pi * (radius * radius);

	printf("Perimeter of the Circle = %f inches\n", perimeter);
	printf("Area of the Circle = %f square inches\n", area);
	return 0;
}
