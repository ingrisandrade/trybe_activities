//Tabuada de 7, multiplicando de 1 até 9:

let numero = 7;

for(let contador = 1; contador <= 9; contador +=1) {
  console.log(numero * contador);
}

//Lista de pessoas aprovadas no processo seletivo:
//Escreva um código que dê boas vindas para cada uma dessas pessoas:

let listaDeNomes = ['Joana', 'Maria', 'Lucas'];

for(let index = 0; index < listaDeNomes.length; index +=1) {
  let mensagem = 'Boas vindas, ' + listaDeNomes[index] + '!';
  console.log(mensagem);
}


//Suponha que temos uma lista com marcas de carros:

let carros = ['Saab', 'Volvo', 'BMW'];

for(let i = 0; i < carros.length; i +=1) {
  console.log(carros[i]);
}

//Exercício 1
//Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let indice = 0; indice < groceryList.length; indice +=1) {
  console.log(groceryList[indice]);
}

//OU 

for(let indice = 0; indice < groceryList.length; indice +=1) {
  let mensagem2 = 'Comprar ' + groceryList[indice] + '!';
  console.log(mensagem2);
}