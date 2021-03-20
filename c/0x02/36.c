/**
 * main - Entry point
 * Return: 0 on success
 *
 * Write a C program to read a password until it is correct.
 * For the wrong password print "Incorrect password" and for correct password
 * print "Correct password" and quit the program.
 * The correct password is 1234.
 */
#include <stdio.h>
#include <string.h>
int main(void)
{
	char password[] = "1234", usrpwd[6];
	int i, flag = 0;

	while (flag == 0)
	{
		printf("Input the password: ");
		fflush(stdin);
		fgets(usrpwd, sizeof(usrpwd), stdin);
		for (i = 0; i <= sizeof(usrpwd); i++)
			if (usrpwd[i] == '\n')
				usrpwd[i] = '\0';
		if (strcmp(password, usrpwd) == 0)
		{
			printf("Correct password\n");
			flag++;
		}
		else
			printf("Incorrect password\n");
	}
	return (0);
}
