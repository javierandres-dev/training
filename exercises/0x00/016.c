/* Write a C program to read an amount (integer value) and break the amount
   into smallest possible number of bank notes. */
#include <stdio.h>
int main()
{
	int amount;
	float val1 = 100.00;
	float val2 = 50.00;
	float val3 = 20.00;
	float val4 = 10.00;
	float val5 = 5.00;
	float val6 = 2.00;
	float val7 = 1.00;
	int note;

	printf("Input the amount: ");
	scanf("%d", &amount);
	printf("There are:\n");
	note = amount / val1;
	printf("%d Note(s) of %.2f\n", note, val1);
	amount = amount - (note * val1);
	note = amount / val2;
	printf("%d Note(s) of %.2f\n", note, val2);
	amount = amount - (note * val2);
	note = amount / val3;
	printf("%d Note(s) of %.2f\n", note, val3);
	amount = amount - (note * val3);
	note = amount / val4;
	printf("%d Note(s) of %.2f\n", note, val4);
	amount = amount - (note * val4);
	note = amount / val5;
	printf("%d Note(s) of %.2f\n", note, val5);
	amount = amount - (note * val5);
	note = amount / val6;
	printf("%d Note(s) of %.2f\n", note, val6);
	amount = amount - (note * val6);
	note = amount / val7;
	printf("%d Note(s) of %.2f\n", note, val7);
	return 0;
}
