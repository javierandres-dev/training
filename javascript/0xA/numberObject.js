'use strict';
const minValue = Number.MIN_VALUE;
const maxValue = Number.MAX_VALUE;

const minSafeInt = Number.MIN_SAFE_INTEGER;
const maxSafeInt = Number.MAX_SAFE_INTEGER;

const negInf = Number.NEGATIVE_INFINITY;
const posInf = Number.POSITIVE_INFINITY;

const num = 123;
const negNum = -123;
const decNum = 123.123;
const decNeg = -123.123;
const sumNum = 123 + 1;
const opeRes = 123 * 2;
const hexNum = 0xf;
const objNum = new Number(123);
const nan = NaN;
const infinity = Infinity;

const x = 999999999999999;
const y = 9999999999999999;

const maxDec = 1.2345678901234567;

const opeDecNotAccurate = 0.2 + 0.1;
const opeDecNotAccurateSol = (0.2 * 10 + 0.1 * 10) / 10;

const zeroDiv = 0 / 0;

const numStr = '123';
const decNumStr = '123.123';
const str = "I'm a string";
const two = 2;
const ten = 10;
const oneMillion = 1000000;
const oneMillionSugar = 1_000_000;

// console.log(minValue);
// console.log(maxValue);

// console.log(minSafeInt);
// console.log(maxSafeInt);

// console.log(negInf);
// console.log(posInf);

// console.log(Number.EPSILON);

// console.log(Number.isSafeInteger(num));
// console.log(Number.isSafeInteger(maxSafeInt));
// console.log(Number.isSafeInteger(maxSafeInt + 1));
// console.log(Number.isSafeInteger(Infinity));

// console.log(Number.isFinite(num));
// console.log(isFinite(num));
// console.log(Number.isFinite(numStr));
// console.log(isFinite(numStr));
// console.log(Number.isFinite(zeroDiv));
// console.log(isFinite(zeroDiv));
// console.log(Number.isFinite(infinity));
// console.log(isFinite(infinity));

// console.log(NaN);
// console.log(typeof NaN);
// console.log(Number.NaN);
// console.log(typeof Number.NaN);

// console.log(Number.isNaN(num));
// console.log(isNaN(num));
// console.log(Number.isNaN(numStr));
// console.log(isNaN(numStr));
// console.log(Number.isNaN(str));
// console.log(isNaN(str));
// console.log(Number.isNaN(objNum));
// console.log(isNaN(objNum));
// console.log(Number.isNaN(nan));
// console.log(isNaN(nan));

// console.log(ten.toExponential());
// console.log(ten.toExponential(0));
// console.log(ten.toExponential(1));
// console.log(ten.toExponential(20));

// console.log(oneMillion);
// console.log(oneMillionSugar);

// console.log(Number.isInteger(num));
// console.log(Number.isInteger(negNum));
// console.log(Number.isInteger(decNum));
// console.log(parseFloat(numStr));
// console.log(parseFloat(decNumStr));
// console.log(parseInt(numStr));
// console.log(parseInt(decNumStr));
// console.log(num.toFixed(1));
// console.log(decNum.toFixed(1));
// console.log(oneMillion.toLocaleString('en-US'));
// console.log(oneMillion.toLocaleString('es-CO'));
// console.log(oneMillion.toString());
// console.log(ten.toString(2));
// console.log(ten.toString(8));
// console.log(ten.toString(16));
// console.log(maxDec.toPrecision());
// console.log(maxDec.toPrecision(4));

// console.log(num.valueOf());
// console.log(objNum.valueOf());
