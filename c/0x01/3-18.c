/* Ciclos
Calcular la media aritmética de n números */
#include <stdio.h>
int main()
{
	int nt, i, n, sn, ma;
	printf("Ingrese el número de términos: ");
	scanf("%d", &nt);
	for (i = 0; i < nt; i++)
	{
		printf("Ingrese un número: ");
		scanf("%d", &n);
		sn += n;
	}
	ma = sn / nt;
	printf("la media aritmética es %d\n", ma);
	return 0;
}
