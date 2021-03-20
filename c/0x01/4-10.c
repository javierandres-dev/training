/* Funciones
Tomar tres números, obtener su promedio y visualizar "Aprobado"
si su promedio es mayor a 10.5, en caso contrario "Mejore la nota" */
#include <stdio.h>
int my_func(float a, float b, float c)
{
	float threshold = 10.5;
	if ((a + b + c) / 3 > threshold)
	{
		return 1;
	}
	return 0;
}
int main()
{
	float n1, n2, n3;
	int x;
	printf("Ingresa el primer número: ");
	scanf("%f", &n1);
	printf("Ingresa el segundo número: ");
	scanf("%f", &n2);
	printf("Ingresa el tercer número: ");
	scanf("%f", &n3);
	x = my_func(n1, n2, n3);
	if (x == 1)
	{
		printf("Aprobado\n");
	}
	else
	{
		printf("Mejore la nota\n");
	}
	return 0;
}
