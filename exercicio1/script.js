//////////////// EXERCÍCIO I ////////////////

console.log("////////////////// EXERCÍCIO 1 /////////////////////");
console.log("");
console.log("a) Declare uma função que imprima Olá, [SEU NOME]!. Chame esta função.");
function meuNome(nome) {
    console.log(`Olá, ${nome}!`);
}

meuNome("Bruno");

console.log('');
console.log("b) Declare uma função que imprima a tabuada do 6. Chame esta função.");
const tabuada = function (numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${numero} = ${i * numero}`);
    }
    return tabuada;
}

tabuada(6);
console.log("");

console.log("c) Comente as funções criadas acima, e reescreva - as utilizando expressões de função, ou arrow functions");
// ARROW FUNCTIONS
const meuNomeArrow = nome => console.log(`Olá, ${nome}!`);

meuNomeArrow("Bruno");
console.log("");

const tabuadaArrow = numero => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${numero} = ${i * numero}`);
    }
    return tabuada;
}

tabuadaArrow(6);