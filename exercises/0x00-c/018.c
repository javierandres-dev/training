/* Write a C program to convert a given integer (in days) to years, months and
   days, assumes that all months have 30 days and all years have 365 days. */
#include <stdio.h>
int main()
{
	int num, y, m, d;

	printf("Input no. of days: ");
	scanf("%d", &num);
	y = num / 365;
	m = (num - (y * 365)) / 30;
	d = num - (y * 365) - (m * 30);
	printf("%d Year(s)\n", y);
	printf("%d Month(s)\n", m);
	printf("%d Day(s)\n", d);
	return 0;
}
