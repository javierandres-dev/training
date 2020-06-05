/* Vectores
Leer 5 números, almacenarlos en un vector,
y mostrar la suma, resta, multiplicación y división de todos. */
#include <stdio.h>
int main()
{
    int arr[5];
    int add = 0, sub = 0, mul = 1, div = 1;
    int i = 0;
    while (i < 5)
    {
        printf("Ingrese un número: ");
        scanf("%d", &arr[i]);
        i++;
    }
    for (i = 0; i < 5; i++)
    {
        add = add + arr[i];
        sub = sub - arr[i];
        mul = mul * arr[i];
        div = div / arr[i];
    }
    printf("La suma de los cinco números es: %d\n", add);
    printf("La resta de los cinco números es: %d\n", sub);
    printf("La multiplicación de los cinco números es: %d\n", mul);
    printf("La división de los cinco números es: %d\n", div);
    return 0;
}
