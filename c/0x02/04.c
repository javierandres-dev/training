/* Write a C program to print the following characters in a reverse way.
   Test Characters: 'X', 'M', 'L'. */
#include<stdio.h>
int main()
{
	int i;
	int j;
	int end;
	char str[] = "XML";
	char rev[4];

	i = 0;
	while(str[i] != '\0')
	{
		i++;
	}
	end = i - 1;
	for(j = 0; j < i; j++)
	{
		rev[j] = str[end];
		end--;
	}
	rev[j] = '\0';
	printf("The reverse of %s is %s\n", str, rev);
	return 0; 
} 
