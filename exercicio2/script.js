//////////////////// EXERCÍCIO 2 ////////////////////

const arrayDeNumeros = [10, 45, 12, 82, 65, 43, 22, 18];

console.log(arrayDeNumeros);
console.log("");

//1.
console.log("1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma const triplos, e guarde o valor do array nesta const;");
const triplo = arrayDeNumeros.map((numero) => {
    return numero * 3;
});

console.log(triplo);
console.log("");

// 2.
console.log("2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma const metades, e guarde o valor do array nesta const;");
const metade = arrayDeNumeros.map((numero) => {
    return numero / 2;
})

console.log(metade);