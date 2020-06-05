/* Vectores
Llenar un vector con los números impares comprendidos entre 1 y 20,
y mostrarlos en orden descendente */
#include <stdio.h>
int main()
{
    int arr[10];
    int x = 1;
    int i = 0;
    int j;
    while (x <= 20)
    {
        if (x % 2 != 0)
        {
            arr[i] = x;
            i++;
        }
        x++;
    }
    for (j = i -1; j >= 0; j--)
    {
        printf("%d\n", arr[j]);
    }
    return 0;
}
