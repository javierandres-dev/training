/* Funciones
Calcular el área y el perímetro de un rectángulo dada la base y la altura */
#include <stdio.h>
int calc_area(int a, int b)
{
	int area = b * a;
	return (area);
}
int calc_perimetro(int a, int b)
{
	int peri = (b * 2) + (a * 2);
	return (peri);
}
int main()
{
	int a, b, x, y;
	printf("Ingrese la base del rectángulo: ");
	scanf("%d", &b);
	printf("Ingrese la altura del rectángulo: ");
	scanf("%d", &a);
	x = calc_area(a, b);
	printf("El área del rectangulo rectángulo es: %d\n", x);
	y = calc_perimetro(a, b);
	printf("El perímetro del rectángulo es: %d\n", y);
	return 0;
}
