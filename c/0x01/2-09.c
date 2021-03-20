/* Condicionales
Pedir nombre, edad y género, imprimir solo si:
es mayor de edad y masculino. */
#include <string.h>
#include <stdio.h>
int main() {
    char *nombre;
    char genero;
    int edad;
    printf("Nombre: ");
    scanf("%s", nombre);
    printf("Género: ");
    scanf(" %c", &genero);
    printf("Edad: ");
    scanf("%d", &edad);
    if (genero == 'm' && edad >= 18) {
        printf("%s tiene %d años y es %c\n", nombre, edad, genero);
    }
    else {
        printf("No cumple condiciones\n");
    }
    return 0;
}