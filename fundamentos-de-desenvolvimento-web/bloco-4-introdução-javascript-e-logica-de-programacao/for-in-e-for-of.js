//o for/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades, ou seja, nos retorna o índice. 

let pizzas = {
  sabor: 'Palmito',
  preco: 39.90,
  bordaCatupiry: true
};

for(let key in pizzas) { //chama o objeto pelas chaves
  console.log(key);
}

for (let key in pizzas) { //chama o objeto pelas propriedades
  console.log(pizzas);
}

for (let key in pizzas) { //chama o objeto pelo dot notection
  console.log(pizzas.preco); //Seleciona qual propriedade chamada
}

for (let key in pizzas) {
  console.log(pizzas['bordaCatupiry']); //coloca a propriedade dentro dos colchetes
}

for (let key in pizzas) {
  console.log(pizzas[key]); //passa por cada uma das propriedades e devolve o valor
}

let pizzazDoces = ['chocolate', 'banana', 'morango']
for(let key in pizzazDoces) {
  console.log(key);
}

let pizzazDoces = ['chocolate', 'banana', 'morango']
for(let key in pizzazDoces) {
  console.log(pizzazDoces);
}

let pizzazDoces = ['chocolate', 'banana', 'morango']
for(let key in pizzazDoces) {
  console.log(pizzazDoces[key]);
}

let pizzazDoces = ['chocolate', 'banana', 'morango']
for(let key in pizzazDoces) {
  console.log(key, pizzazDoces[key]);
}

//Depois de conhecer o laço for/in , o código que mostra as marcas de carros presentes em um Array é:

let cars = ['Saab', 'Volvo', 'BMW'];

for(let index in cars) {
  console.log(cars[index]);
}

//Um outro exemplo é a iteração nas chaves de um objeto:

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for(let index in car) {
  console.log(index, car[index]);
}

//------------------------------------------------------------

//Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in .

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

//Prática:

//1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

//for(let index = 0; index < names.length; index +=1) {
  for(let key in names) {
    let mensagem = 'Olá, ';
    console.log(mensagem, names[key]);
  }

//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let index in car) {
  console.log(index, car[index]);
}