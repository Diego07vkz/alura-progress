// criando um programa de conagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

alert('Veja o console para conferir a contagem progressiva');

let contador = prompt('Digite um número para iniciar a contagem progressiva');

while (contador <= 0) {
    console.log(contador);
    contador++;
}