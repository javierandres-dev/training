/* Funciones
Leer un valor expresado en km y retornarlo expresado en metros. */
#include <stdio.h>
int my_function(int km)
{
	int mt = km * 1000;
	printf("%d kilometro(s) equivalen a %d metros.\n", km, mt);
	return 0;
}
int main()
{
	int km;
	printf("Ingrese cantidad de kilometros: ");
	scanf("%d", &km);
	my_function(km);
	return 0;
}
