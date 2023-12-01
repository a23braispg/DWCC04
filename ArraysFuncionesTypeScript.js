"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var paises = ["España", "Portugal", "Francia", "Alemania", "Italia", "Belgica", "Grecia"];
console.log("Número de elementos del Array:", paises.length);
console.log("Países:", paises);
console.log("Países en sentido inverso:", __spreadArray([], paises, true).reverse());
paises.unshift("Argentina");
console.log("Array después de añadir al principio:", paises);
paises.push("Brasil");
console.log("Array después de añadir al final:", paises);
var eliminadoInicio = paises.shift();
console.log("Elemento eliminado al principio:", eliminadoInicio);
console.log("Array después de eliminar al principio:", paises);
var eliminadoFinal = paises.pop();
console.log("Elemento eliminado al final:", eliminadoFinal);
console.log("Array después de eliminar al final:", paises);
rl.question("Ingrese la posición del país que desea ver:", function (posicionRl) {
    var posicion = parseInt(posicionRl);
    if (!isNaN(posicion) && posicion >= 0 && posicion < paises.length) {
        console.log("Elemento en la posici\u00F3n ".concat(posicion, ":"), paises[posicion]);
        rl.question("Ingrese el país para obtener su posición:", function (elementoRl) {
            var posicionElemento = paises.indexOf(elementoRl);
            if (posicionElemento !== -1) {
                console.log("Posici\u00F3n de ".concat(elementoRl, ":"), posicionElemento);
                rl.question("Ingrese el inicio de la posición:", function (inicioRl) {
                    rl.question("Ingrese el fin de la posición:", function (finRl) {
                        var inicio = parseInt(inicioRl);
                        var fin = parseInt(finRl);
                        if (!isNaN(inicio) && !isNaN(fin) && inicio >= 0 && fin <= paises.length && inicio <= fin) {
                            console.log("Elementos entre las posiciones ".concat(inicio, " y ").concat(fin, ":"), paises.slice(inicio, fin));
                        }
                        else {
                            console.log("Posiciones inválidas. Ingrese números válidos dentro del rango.");
                        }
                        rl.close();
                    });
                });
            }
            else {
                console.log("".concat(elementoRl, " no encontrado en el array."));
                rl.close();
            }
        });
    }
    else {
        console.log("Posición inválida. Ingrese un número válido dentro del rango.");
        rl.close();
    }
});
