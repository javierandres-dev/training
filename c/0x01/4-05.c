/* Funciones
Facilite el ingreso de dos números, muestre su suma, resta,
multiplicación, división y módulo.*/
#include <stdio.h>
int my_function(int a, int b)
{
	printf("%d + %d = %d\n", a, b, a + b);
	printf("%d - %d = %d\n", a, b, a - b);
	printf("%d * %d = %d\n", a, b, a * b);
	printf("%d / %d = %d\n", a, b, a / b);
	printf("%d %% %d = %d\n", a, b, a % b);
	return 0;
}
int main()
{
	int a, b;
	printf("Ingrese el primer número: ");
	scanf("%d", &a);
	printf("Ingrese el segundo número: ");
	scanf("%d", &b);
	my_function(a, b);
	return 0;
}
