

// Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar .

let nome = prompt('Qual é o seu nome?');

// Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade
let idade = prompt('Qual é a sua idade?');

// Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

if (idade >= 18) {
    alert('Pode tirar a habilitação!');
}

//opcional, não estava no projeto original mais eu fiz
else {
    alert('Ainda não pode tirar a habilitação.');
}