/* Write a C program to compute the perimeter and area of a rectangle with a
   height of 7 inches. and width of 5 inches. */
#include <stdio.h>
int main()
{
	int height = 7;
	int width = 5;
	int perimeter = 2 * (height + width);
	int area = height * width;

	printf("Perimeter of the rectangle = %d inches\n", perimeter);
	printf("Area of the rectangle = %d square inches\n", area);
	return 0;
}
