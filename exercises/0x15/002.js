/**
 * Escribe un programa que pueda calcular el área de 3 figuras geométricas,
 * triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se
 * quiere calcular el área, después solicita los datos que necesites para calcularlo.
 * triángulo = b * h/2
 * rectángulo = b * h
 * círculo = π * r2 (pi * radio al cuadrado)
 */
const areaTriangle = (b, h) => { console.log('El área del triángulo es: '+ (b * h) / 2) };
const areaRectangle = (b, h) => { console.log('El área del rectángulo es: '+ b * h) };
const areaCircle = (r) => { console.log('El área del círculo es: '+ Math.PI * (r * r)) };
let b, h, r;
const selection = prompt(`
  Seleccione la figura de la que quiere calcular el área:
  1 para triángulo
  2 para rectángulo
  3 para círculo
`);
if (selection > 0 && selection < 4) {
    switch (selection) {
        case '1':
            b = parseInt(prompt('Base: '));
            h = parseInt(prompt('Altura: '));
            areaTriangle(b, h);
            break;
        case '2':
            b = parseInt(prompt('Base: '));
            h = parseInt(prompt('Altura: '));
            areaRectangle(b, h);
            break;
        case '3':
            r = parseInt(prompt('Radio: '));
            areaCircle(r);
            break;
        default:
            break;
    }
}
else {
    console.log('Elige una opción válida!');
}