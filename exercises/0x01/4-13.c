/* Funciones
Recibir un tiempo expresado en minutos y
visualizar por pantalla en horas y minutos. */
#include <stdio.h>
int my_func(int x)
{
	int h = x / 60;
	int m = x % 60;
	printf("%d minutos son %d horas con %d minutos\n", x, h, m);
	return 0;
}
int main()
{
	int m;
	printf("Ingrese cantidad de minutos: ");
	scanf("%d", &m);
	my_func(m);
	return 0;
}
