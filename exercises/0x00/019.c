/* Write a C program that accepts 4 integers p, q, r, s from the user where
   r and s are positive and p is even. If q is greater than r and s is greater
   than p and if the sum of r and s is greater than the sum of p and q print
   "Correct values", otherwise print "Wrong values". */
#include <stdio.h>
int main()
{
	int p, q, r, s, rs, pq;

	printf("Input the first integer: ");
	scanf("%d", &p);
	printf("Input the second integer: ");
	scanf("%d", &q);
	printf("Input the third integer: ");
	scanf("%d", &r);
	printf("Input the fourth integer: ");
	scanf("%d", &s);
	rs = r + s;
	pq = p + q;
	if(r > 0 && s > 0)
	{
		if(p % 2 == 0)
		{
			if(q > r && s > p)
			{
				if(rs > pq)
				{
					printf("Correct values\n");
				}
				else
				{
					printf("Wrong values\n");
				}
			}
			else
			{
				printf("Wrong values\n");
			}
		}
		else
		{
			printf("Wrong values\n");
		}
	}
	else
	{
		printf("Wrong values\n");
	}
	return 0;
}
