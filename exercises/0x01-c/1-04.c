/* Operadores
Calcular longitudes de circurferencia */
#include <stdio.h>
int main() {
    const float pi = 3.14159;
    float r, l, d;
    printf("Radio: ");
    scanf("%f", &r);
    l = 2 * pi * r;
    printf("Longitud de circunferencia: %f (primera forma)\n", l);
    d = r * 2; // Diámetro es dos veces el radio
    l = pi * d;
    printf("Longitud de circunferencia: %f (segunda forma)\n", l);
    return 0;
}