/* Write a C program to convert specified days into years, weeks and days.
   Ignore leap year. */
#include <stdio.h>
int main()
{
	int days = 1329;
	int years;
	int weeks;

	printf("Number of days : %d\n", days);
	years = days / 365;
	printf("Years: %d\n", years);
	days = days - (years * 365);
	weeks = days / 7;
	printf("Weeks: %d\n", weeks);
	days = days - (weeks * 7);
	printf("Days: %d\n", days);
	return 0;
}
