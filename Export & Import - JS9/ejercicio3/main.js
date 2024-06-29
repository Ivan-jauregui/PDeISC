import Calculadora from './calculadora.js';

const calculadora=new Calculadora();

const resultadoMultiplicacion = calculadora.multiplicar(6, 7);
console.log(`Multiplicación: 4 x 2 = ${resultadoMultiplicacion}`);

const resultadoDivision = calculadora.dividir(10, 2);
console.log(`División: 60 / 6 = ${resultadoDivision}`);

