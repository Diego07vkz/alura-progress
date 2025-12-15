// esse código tem a mesma ideia do modulo anterior, muda apenas algumas funções que aprendi, como: condicionais if e else
alert('Boas-vindas ao jogo do número secreto');
let numeroSecreto = 7; 
console.log(numeroSecreto)
let chute = (prompt('Digite um número entre 1 e 10'));


// se chute for igual ao número secreto 
if (chute == numeroSecreto) {
    alert(`Parabéns! Você acertou o numero secreto! ( ${numeroSecreto} )`);
} else {
    if (chute > numeroSecreto) {
        alert(`Você errou! O número secreto é menor que ${chute}`);
    } else {
        alert(`Você errou! O número secreto é maior que ${chute}`);
    }
}