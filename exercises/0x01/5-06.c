/* Vectores
Leer 10 números, almacenar 5 en un vector y 5 en otro vector,
mostrar los 10 números mediante un solo vector. */
#include <stdio.h>
int main()
{
    int arr1[5], arr2[5], arr3[10];
    int i = 0, j = 0;
    while (i < 10)
    {
        printf("Ingrese un número: ");
        if (i < 5)
        {
            scanf("%d", &arr1[i]);
            //arr3[i] = arr1[i];
        }
        else
        {
            scanf("%d", &arr2[j]);
            //arr3[i] = arr2[j];
            j++;
        }
        i++;
    }
    i = 0;
    while (i < 5)
    {
        arr3[i] = arr1[i];
        i++;
    }
    j = 0;
    while (i < 10)
    {
        arr3[i] = arr2[j];
        j++;
        i++;
    }
    for (j = 0; j < i; j++)
    {
        printf("%d\n", arr3[j]);
    }
    return 0;
}
