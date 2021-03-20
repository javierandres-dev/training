/**
 * main - Entry point
 * Return: 0 on success
 *
 * Write a C program to read the coordinates(x, y) (in Cartesian system) and
 * find the quadrant to which it belongs (Quadrant -I, Quadrant -II,
 * Quadrant -III, Quadrant -IV).
 * Note: A Cartesian coordinate system is a coordinate system that specifies
 * each point uniquely in a plane by a pair of numerical coordinates.
 * These are often numbered from 1st to 4th and denoted by Roman numerals:
 * I (where the signs of the (x,y) coordinates are I(+,+), II (−,+),
 * III (−,−), and IV (+,−).
 */
#include <stdio.h>
int main(void)
{
	int x, y;

	printf("Input the Coordinate(x,y):\nx: ");
	scanf("%d", &x);
	printf("y: ");
	scanf("%d", &y);
	printf("%d, %d\n", x, y);
	if (x > 0 && y > 0)
		printf("Quadrant-I(+,+)\n");
	else if (x < 0 && y > 0)
		printf("Quadrant-II(-,+)\n");
	else if (x < 0 && y < 0)
		printf("Quadrant-III(-,-)\n");
	else if (x > 0 && y < 0)
		printf("Quadrant-IV(+,-)\n");
	else
		printf("Origin point(0,0)\n");
	return (0);
}
