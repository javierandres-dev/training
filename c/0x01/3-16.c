/* Ciclos
mostrar un menú del tipo "¿Desea salir? (S/N),
termina cuando el usuario presione "S" */
#include <stdio.h>
#include <stdbool.h>
int main()
{
	char c = 'N';
	char i = true;
	while (i)
	{
		printf("¿Desea salir de este programa? (S/N)\n");
		scanf("%c", &c);
		if (c == 'S')
		{
			i = false;
		}
	}
	return 0;
}
