/**
 * Escribe un programa que pueda calcular el área de 3 figuras geométricas,
 * triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se
 * quiere calcular el área, después solicita los datos que necesites para calcularlo.
 * triángulo = b * h/2
 * rectángulo = b * h
 * círculo = π * r2 (pi * radio al cuadrado)
 */
const areaTriangle = (b, h) => { console.log('The area of the triangle is: ' + (b * h) / 2) };
const areaRectangle = (b, h) => { console.log('The area of the rectangle is: ' + b * h) };
const areaCircle = (r) => { console.log('the area of the circle is: ' + Math.PI * (r * r)) };
let b, h, r;
const selection = prompt(`
  Choice a figure to get area:
  1 for a triangle
  2 for a rectangle
  3 for a circle
`);
if (selection > 0 && selection < 4) {
    switch (selection) {
        case '1':
            b = parseInt(prompt('Base: '));
            h = parseInt(prompt('Height: '));
            areaTriangle(b, h);
            break;
        case '2':
            b = parseInt(prompt('Base: '));
            h = parseInt(prompt('Height: '));
            areaRectangle(b, h);
            break;
        case '3':
            r = parseInt(prompt('Radius: '));
            areaCircle(r);
            break;
        default:
            console.log('Choose a valid option!');
            break;
    }
}