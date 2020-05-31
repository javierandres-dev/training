/* Condicionales
Pedir nombre y signo, imprimir nombre solo si es signo aries */
#include <string.h>
#include <stdio.h>
int main() {
    char nombre[8], signo[8], check[] = "aries";
    printf("Nombre: ");
    scanf("%s", nombre);
    printf("Signo: ");
    scanf("%s", signo);
    if (strcmp(signo, check) == 0) {
        printf("%s es signo %s\n", nombre, signo);
    }
    else {
        printf("No cumple condición\n");
    }
    return 0;
}