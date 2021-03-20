/* Funciones
Expresar en horas, minutos y segundos un tiempo expresado en segundos */
#include <stdio.h>
int my_func(int x)
{
	int h, m, s;
	h = x / 3600;
	s = x % 3600;
	m = s / 60;
	s = s % 60;
	printf("%d segundos equivalen a:\n", x);
	printf("Horas: %d, minutos: %d, segundos: %d\n", h, m, s);
	return 0;
}
int main()
{
	int x;
	printf("Ingrese la cantidad de segundos: ");
	scanf("%d", &x);
	my_func(x);
	return 0;
}
