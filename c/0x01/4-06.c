/* Funciones
Facilite el ingreso de tres números,
muestre su respectiva suma y multiplicación.*/
#include <stdio.h>
int my_function(int a, int b, int c)
{
	printf("%d + %d + %d = %d\n", a, b, c, a + b + c);
	printf("%d * %d * %d = %d\n", a, b, c, a * b * c);
	return 0;
}
int main()
{
	int a, b, c;
	printf("Ingrese el primer número: ");
	scanf("%d", &a);
	printf("Ingrese el segundo número: ");
	scanf("%d", &b);
	printf("Ingrese el tercer número: ");
	scanf("%d", &c);
	my_function(a, b, c);
	return 0;
}
