/* Write a C program that accepts an employee's ID, total worked hours of a
   month and the amount he received per hour. Print the employee's ID and
   salary (with two decimal places) of a particular month. */
#include <stdio.h>
int main()
{
	char id[10];
	int hrs;
	int ahr = 15000;
	float salary;

	printf("Input the Employees ID(Max. 10 chars): ");
	scanf("%s", id);
	printf("Input the working hrs: ");
	scanf("%d", &hrs);
	printf("Salary amount/hr: %d\n", ahr);
	printf("Employees ID = %s\n", id);
	salary = hrs * ahr;
	printf("Salary = U$ %.2f\n", salary);
	return 0;
}
