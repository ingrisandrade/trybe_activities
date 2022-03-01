//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

  const a = 8;
  const b = 6;

  let adicao = a + b;
  let subtracao = a - b;
  let multiplicacao = a * b;
  let divisao = a / b;
  let modulo = a % b;

  console.log(adicao);
  console.log(subtracao);
  console.log(multiplicacao);
  console.log(divisao);
  console.log(modulo);

  //Forma simplificada:

  const a = 8;
  const b = 6;

  console.log('Soma: ' + (a + b));
  console.log('Subtração: ' + (a - b));
  console.log('Multiplicação: ' + (a * b));
  console.log('Divisão: ' + (a / b));
  console.log('Módulo: ' + (a % b));

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const num1 = 40;
const num2 = 50;

if(num1 > num2) {
  console.log('"Num1" é maior que "Num2"');
} else {
  console.log('"Num2" é maior que "Num1"');
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const dani = 44;
const ingris = 31;
const rose = 54;

if(dani > ingris && dani > rose) {
  console.log('Dani é a mais velha das três');
}else if(ingris > dani && ingris > rose) {
  console.log('Ingris é a mais velha das três');
}else if(rose > dani && rose > ingris) {
  console.log('Rose é a mais velha das três');
}

//Forma Simplificada

const a = 10;
const b = 42;
const c = 12;

if(a > b && a > c) {
  console.log('O maior número é: ' + a + ' (a)');
} else if(b > a && b > c) {
  console.log('O maior número é: ' + b + ' (b)');
} else {
  console.log('O maior número é: ' + c + '(c)');
}

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const a = 90;

if(a > 0) {
  console.log('positive');
} else if(a < 0) {
  console.log('negative');
} else {
  console.log(zero);
}


//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angulo1 = 65;
const angulo2 = 100;
const angulo3 = 15;

const somaDosAngulos = angulo1 + angulo2 + angulo3;

const todosOsAngulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if(todosOsAngulosPositivos) {
  if(somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)

let chessPiece = 'Rei';

switch (chessPiece.toLowerCase()) {
  case 'bispo': console.log('Bispo -> Diagonal');
    break;

  case 'rei': console.log('Rei -> Uma casa apenas para qualquer direção');
    break;

  case 'rainha': console.log('Rainha -> Diagonal, horizontal e vertical');
   break;

  case 'cavalo': console.log('Cavalo -> "L" pode pular as peças');
    break;

  case 'torre': console.log('Torre -> Horizontal e vertical');
    break;

  case 'peão': console.log('Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas');
    break

  default: console.log('Erro, peça inválida');
}

/* Escreva um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

const notaEmPorcentagem = 80;

if(notaEmPorcentagem < 0 || notaEmPorcentagem > 100) {
  console.log('Erro, nota incorreta!');
  } else if (notaEmPorcentagem >= 90) {
    console.log('A');
  } else if (notaEmPorcentagem >= 80) {
    console.log('B');
  } else if (notaEmPorcentagem >= 70) {
    console.log('C');
  } else if (notaEmPorcentagem >= 60) {
    console.log('D');
  } else {
    console.log('F');
  }

  