//////////////////// EXERCÍCIO 1 ////////////////////
// 1.
console.log("1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.");
const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const caixaAlta = (objeto) => {
    return {
        nome: objeto.nome.toUpperCase(),
        profissao: objeto.profissao.toUpperCase(),
        username: objeto.username.toUpperCase(),
        senha: objeto.senha.toUpperCase()
    }
}

console.log(caixaAlta(objeto));
console.log("");

//2.
console.log("2. A segunda deve retornar os valores do objeto como texto corrido.");
const textoCorrido = (objeto) => {
    return `Texto Corrido: ${objeto.nome}, ${objeto.profissao}, ${objeto.username} e ${objeto.senha}`;
}

console.log(textoCorrido(objeto));
console.log("");

// 3.
console.log("3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.");
const objetoCallBack = (objeto, callBack) => {
    const response = callBack(objeto);
    console.log(response);
}

console.log("");
console.log("Chame a funcão 3, passando como argumentos o objeto passado no arquivo script.js, e a funcão 1. Repita o processo para a funcão 2");
// PARTE 1
console.log('Parte 1:');
console.log(objeto, caixaAlta(objeto));
// PARTE 2
console.log('Parte 2:');
console.log(objeto, textoCorrido(objeto));