// Write a C program to display multiple variables.
#include <stdio.h>
int main()
{
	int a = 125, b = 12345;
	long ax = 1234567890;
	short s = 4043;
	float x = 2.13459;
	double dx = 1.1415927;
	unsigned long ux = 2541567890;
	char c = 'W';
	char *str = "Hello";

	printf("Display variable a, type int: %d \n", a);
	printf("Display variable b, type int: %d \n", b);
	printf("Display variable ax, type long: %ld \n", ax);
	printf("Display variable s, type short: %hu \n", s);
	printf("Display variable x, type float: %f \n", x);
	printf("Display variable dx, type double: %f \n", dx);
	printf("Display variable ux, type unsigned long: %lu \n", ux);
	printf("Display variable c, type char: %c \n", c);
	printf("Display variable str type char *: %s \n", str);
	printf("--------------------------------\n");
	printf("Display a + c = %d \n", a + c);
	printf("Display x + c = %f \n", x + c);
	printf("Display dx + x = %f \n", dx + x);
	printf("Display ((int) dx) + ax = %ld \n", ((int)dx) + ax);
	printf("Display a + x = %f \n", a + x);
	printf("Display s + b = %d \n", s + b);
	printf("Display ax + b = %ld \n", ax + b);
	printf("Display s + c = %hd \n", s + c);
	printf("Display ax + c = %ld \n", ax + c);
	printf("Display ax + ux = %lu \n", ax + ux);
	return 0;
}
