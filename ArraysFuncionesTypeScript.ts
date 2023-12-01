import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let paises: string[] = ["España", "Portugal", "Francia", "Alemania", "Italia", "Belgica", "Grecia"];

console.log("Número de elementos del Array:", paises.length);

console.log("Países:", paises);

console.log("Países en sentido inverso:", [...paises].reverse());

paises.unshift("Argentina");
console.log("Array después de añadir al principio:", paises);

paises.push("Brasil");
console.log("Array después de añadir al final:", paises);

const eliminadoInicio = paises.shift();
console.log("Elemento eliminado al principio:", eliminadoInicio);
console.log("Array después de eliminar al principio:", paises);

const eliminadoFinal = paises.pop();
console.log("Elemento eliminado al final:", eliminadoFinal);
console.log("Array después de eliminar al final:", paises);

rl.question("Ingrese la posición del país que desea ver:", (posicionRl) => {
  const posicion = parseInt(posicionRl);
  if (!isNaN(posicion) && posicion >= 0 && posicion < paises.length) {
    console.log(`Elemento en la posición ${posicion}:`, paises[posicion]);

    rl.question("Ingrese el país para obtener su posición:", (elementoRl) => {
      const posicionElemento = paises.indexOf(elementoRl);

      if (posicionElemento !== -1) {
        console.log(`Posición de ${elementoRl}:`, posicionElemento);

        rl.question("Ingrese el inicio de la posición:", (inicioRl) => {
          rl.question("Ingrese el fin de la posición:", (finRl) => {
            const inicio = parseInt(inicioRl);
            const fin = parseInt(finRl);

            if (!isNaN(inicio) && !isNaN(fin) && inicio >= 0 && fin <= paises.length && inicio <= fin) {
              console.log(`Elementos entre las posiciones ${inicio} y ${fin}:`, paises.slice(inicio, fin));
            } else {
              console.log("Posiciones inválidas. Ingrese números válidos dentro del rango.");
            }

            rl.close();
          });
        });
      } else {
        console.log(`${elementoRl} no encontrado en el array.`);
        rl.close();
      }
    });
  } else {
    console.log("Posición inválida. Ingrese un número válido dentro del rango.");
    rl.close();
  }
});