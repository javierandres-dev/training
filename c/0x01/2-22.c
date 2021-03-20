/* Condicionales
Pedir horas, minutos y segundos y
decir la hora que es un segundo después */
#include <stdio.h>
int main() {
    int h, m, s;
    printf("Horas (Desde 00 hasta 23): ");
    scanf("%d", &h);
    if (h < 0 || h > 23) {
        printf("Hora no válida\n");
        return 1;
    }
    printf("Minutos (Desde 00 hasta 59): ");
    scanf("%d", &m);
    if (m < 0 || m > 59) {
        printf("Minutos no válidos\n");
        return 1;
    }
    printf("Segundos (Desde 00 hasta 59): ");
    scanf("%d", &s);
    if (s < 0 || s > 59) {
        printf("Segundos no válidos\n");
        return 1;
    }
    if (h == 23 && m == 59 && s == 59) {
        h = 00;
        m = 00;
        s = 00;
    }
    else if (h < 23 && m == 59 && s == 59) {
        h = h + 1;
        m = 00;
        s = 00;
    }
    else if (h < 23 && m < 59 && s == 59) {
        m = m + 1;
        s = 00;
    }
    else if (h < 23 && m < 59 && s < 59) {
        s = s + 1;
    }
    else {
        printf("Oops!\n");
        return 1;
    }
    printf("Un segundo después:\t%.2d:%.2d:%.2d\n", h, m, s);
    return 0;
}