/* Write a C program to calculate a bikes average consumption from the
   given total distance (integer value) traveled (in km) and spent fuel
   (in liters, float number - 2 decimal point). */
#include <stdio.h>
int main()
{
	int km;
	float lt;
	float cons;

	printf("Input total distance in km: ");
	scanf("%d", &km);
	printf("Input total fuel spent in liters: ");
	scanf("%f", &lt);
	cons = km / lt;
	printf("Average consumption (km/lt) %.2f\n", cons);
	return 0;
}
