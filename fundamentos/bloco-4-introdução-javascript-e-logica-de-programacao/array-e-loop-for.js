//Como podemos observar, é possível acessar os arrays pelo seu índice. O fato curioso é que a primeira posição do array é representada pelo número 0 . Desse modo, para acessarmos o último elemento da estrutura, devemos pegar a quantidade de seus elementos utilizando o .length e subtrair 1 .

let listaDeTarefas = ['Tomar café da manhã', 'Reunião', 'Brincar com o cachorro']

let procurarPrimeiraTarefa = listaDeTarefas[0];
console.log(procurarPrimeiraTarefa);

let procurarUltimaTarefa = listaDeTarefas[listaDeTarefas.length - 1];
console.log(procurarUltimaTarefa);

//nova atividade para nossa lista de arrays:

//o método .push() adiciona um novo item no final do array. Se precisarmos adicionar no início, podemos usar o .unshift() . Teste em seu console e veja o resultado.

listaDeTarefas.push('Fazer exercícios da Trybe');
console.log(listaDeTarefas);

listaDeTarefas.unshift('Acordar');
console.log(listaDeTarefas);

//Agora vamos remover um item da lista:
//O método .pop() nos permite remover o último item do array. Agora, se precisarmos remover o primeiro item da lista, podemos usar o .shift() 

listaDeTarefas.pop();
console.log(listaDeTarefas);

listaDeTarefas.shift();
console.log(listaDeTarefas);

//Outra importante ferramenta é o indexOf() , usado para procurar o índice de um item no Array .

let indexOfLista = listaDeTarefas.indexOf('Reunião');
console.log(indexOfLista);

//Exercício 1:

//Obtenha o valor "Serviços" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//Exercício 2:

//Procure o índice do valor "Portfólio" do array menu :

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfólio = menu2.indexOf('Portfólio');

console.log(indexOfPortfólio);

//Exercício 3:

//Adicione o valor "Contato" no final do array menu :

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu3.push('Contato');

console.log(menu3);

