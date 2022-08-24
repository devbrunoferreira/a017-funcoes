console.log("////////////////// EXERCÍCIO 2 /////////////////////");
console.log("");
//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das 
//duas entradas e imprima o resultado.Invoque a função e imprima no console o resultado.
console.log("a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.");

function soma(numero1, numero2) {
    const soma = numero1 + numero2;
    // console.log(`- ${numero1} + ${numero2} = ${soma}`);
    return soma;
}

const resultado = soma(4, 6);
console.log(resultado);

console.log("");
// b) Uma função que recebe 2 números e imprime um booleano que informa se o 
// primeiro número é maior ou igual ao segundo.
console.log("b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.");

const numeroMaior = (numero1, numero2) => {
    if (numero1 >= numero2) {
        const maior = numero1 >= numero2;
        console.log(`- O numero ${numero1} é >= a ${numero2}? - (${maior})`);
    } else {
        const maior = numero1 >= numero2;
        console.log(`- O numero ${numero1} é >= a ${numero2}? - (${maior})`);
    }
}

numeroMaior(10, 9);
console.log("");

// c) Uma função que receba um número e imprima se ele é par ou não
console.log("c) Uma função que receba um número e imprima se ele é par ou não.");
// SOLUÇÃO 1
const parOuImpar = function (numero) {
    if (numero % 2 === 0) {
        console.log(`- O número ${numero} é par.`);
    } else {
        console.log(`- O número ${numero} é ímpar.`);
    }
}
// SOLUÇÃO 2
// const parOuImpar = numero => { return console.log(`Seu numero é par? R: ${numero % 2 === 0}`); }

parOuImpar(10);
console.log("");

// d) Uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho
// dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.
console.log("d) Uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.");

const mensagemString = (mensagem) => {
    console.log(`- ${mensagem.length} caracteres - ${mensagem.toUpperCase()} `);
    // return `- ${mensagem.length} caracteres - ${mensagem.toUpperCase()} `;
}

mensagemString("Olá, eu me chamo Bruno!")