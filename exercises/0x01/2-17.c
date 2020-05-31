/* Condicionales
Honda 5% de descuento,
Yamaha 8% de descuento,
Suzuki 10% de descuento,
Otras marcas 2% de descuento */
#include <stdio.h>
int main() {
    char brand;
    printf("Seleccione la marca solo con su inicial:\nHonda, Yamaha, Suzuki, Otras: ");
    scanf("%c", &brand);
    if (brand == 'H') {
        printf("Las motos marca Honda tienen 5%% de descuento\n");
    }
    else if (brand == 'Y') {
        printf("Las motos marca Yamaha tienen 8%% de descuento\n");
    }
    else if (brand == 'S') {
        printf("Las motos marca Suzuki tienen 10%% de descuento\n");
    }
    else {
        printf("Otras marcas tienen 2%% de descuento\n");
    }
    return 0;
}