console.log("////////////////// EXERCÍCIO 3 /////////////////////");
console.log("");

let numero1 = +prompt("Digite o primeiro número:");
let numero2 = +prompt("Digite o segundo número:");

const soma = (numero1, numero2) => {
    const soma = numero1 + numero2;
    console.log(`A soma entre os números ${numero1} e ${numero2} é: ${soma}`);
}

function subtracao(numero1, numero2) {
    const subtracao = numero1 - numero2;
    console.log(`A subtração entre os números ${numero1} e ${numero2} é: ${subtracao}`);
}

const multiplicacao = function (numero1, numero2) {
    const multiplicacao = numero1 * numero2;
    console.log(`A multiplicação entre os números ${numero1} e ${numero2} é: ${multiplicacao}`);
}

const divisao = (numero1, numero2) => {
    const divisao = numero1 / numero2;
    console.log(`A divisão entre os números ${numero1} e ${numero2} é: ${divisao}`);
}

soma(numero1, numero2);
subtracao(numero1, numero2);
multiplicacao(numero1, numero2);
divisao(numero1, numero2);