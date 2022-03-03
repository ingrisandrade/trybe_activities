// Sem o arrow function:
function contarpalavras(frase) {
 return frase.split(' ').length;
}
console.log(contarpalavras('Essa não é forma mais enxuta de uma função.'));

// Com o arrow function:
const contapalavras = frase => frase.split(' ').length;

console.log(contapalavras('Esse é um exemplo de função em uma linha.'));

// Função com 2 parâmetros e sem arrow function:
function objetoPessoa(nome, idade) {
  return {
    nome: nome,
    idade: idade
  }
}
console.log(objetoPessoa('Joaquim', 25));

// Função com 2 parâmetros e com arrow function:
const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});
console.log(objetoPessoa('Joaquim', 25));
// Neste caso para que o JS não entenda que o objeto é o corpo da função é preciso que ele esteja dentro de parênteses.

/*
  Arrow functions nada mais é do que uma forma diferente de se declarar funções escrevendo menos código. Veja abaixo como ficaria a função printName utilizando a sintaxe da arrow function :
*/
const printName = () => {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());

/*
Quando não há nada no corpo da função além do que será retornado, a sintaxe da arrow function nos permite simplificar ainda mais a função printName omitindo o return e as chaves:
*/
const printName = () => 'Lucas';
console.log(printName());

/*
Só é possível omitir os parêntes apenas em um cenário:
Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:
*/
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

/*
Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:
*/
const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));