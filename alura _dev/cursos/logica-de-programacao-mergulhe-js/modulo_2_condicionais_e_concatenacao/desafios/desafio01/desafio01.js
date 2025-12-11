// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

/*
alert('Bem-vindo ao desafio de hoje!');
alert('Dia 1 = Domingo\nDia 2 = Segunda-feira\nDia 3 = Terça-feira\nDia 4 = Quarta-feira\nDia 5 = Quinta-feira\nDia 6 = Sexta-feira\nDia 7 = Sábado');
let dia = prompt('Digite um numero de 1 a 7 correspondente ao dia da semana:');

if (dia == 1 || dia == 7) {
    alert('Bom fim de semana!');
}  else if (dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6) {
    alert('Boa semana de estudos!');
}

*/

// fiz a versão, mas achei que poderia ser melhorada, então refiz abaixo:
alert('Bem-vindo ao desafio de hoje!');
alert('Dia 1 = Domingo\nDia 2 = Segunda-feira\nDia 3 = Terça-feira\nDia 4 = Quarta-feira\nDia 5 = Quinta-feira\nDia 6 = Sexta-feira\nDia 7 = Sábado');

let dia = Number(prompt('Digite um numero de 1 a 7 correspondente ao dia da semana:'));

if (dia == 1 || dia == 7) {
    alert('Bom fim de semana!');
} else if (dia >= 2 && dia <= 6) {  // o "else" não aceita condições, por isso usei "else if"
    alert('Boa semana de estudos!');
} else {
    alert('Número inválido! Por favor, digite um número entre 1 e 7.');
}