/* funciones
Calcule el área de un cuadrado */
#include <stdio.h>
int my_function(int side)
{
	int area = side * side;
	return area;
}
int main()
{
	int side, x;
	printf("Ingrese el valor de uno de los lados del cuadrado: ");
	scanf("%d", &side);
	x = my_function(side);
	printf("El área del cuadrado es: %d\n", x);
	return 0;
}
