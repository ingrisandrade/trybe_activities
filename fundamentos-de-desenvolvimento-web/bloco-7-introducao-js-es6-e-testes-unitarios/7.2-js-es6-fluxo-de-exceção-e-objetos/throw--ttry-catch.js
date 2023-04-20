// O fluxo de exceção: quando um erro acontece em Javascript, devemos lançar uma exceção, que vai interromper o funcionamento do código. Essa é a função do throw :

const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

console.log(sum(2, '3'));

// REFATORANDO O CÓDIGO COM TRY/CATCH 

const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
};

const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    throw error.message;
  }
};

console.log(sum(2, '3'));

// O bloco try , tenta fazer a soma de dois valores. Esse bloco chama a função recém-criada verifyIsNumber , que verifica se os parâmetros passados são números. Quando se depara com um valor que não é um número, o código lança um erro com o throw , que é capturado pelo catch no fluxo de exceção, através da variável error (aqui podemos usar qualquer nome). Dentro do catch retornamos a chave error.message , uma propriedade do objeto nativo Error que contém a mensagem de erro criada anteriormente.

// OBJETO - ADICIONANDO NOVAS CHAVES(KEYS)

const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);

// ADICIONANDO NOVAS PROPRIEDADES AO OBJETO DE ACORDO COM O VALOR DE ALGUMAS VARIÁVEIS

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

// Para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const objectAleatory = {
  nome: 'Maria',
  idade: 25,
  cidade: 'SP',
};

console.log(objectAleatory);

// listar as chaves desse objeto:

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  author: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

// lista com o for in
for (const property in coolestTvShow) {
  console.log(property);
}

// Object.keys é uma maneira mais robusta de trabalhar com objetos e seus valores.
// É utilizado para listar as chaves de um objeto, retornando-as em um array.
// Cada entrada do array retornado será uma string com o valor de cada chave do objeto.

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

// for (const property in coolestTvShow) {
//   console.log(property);
// }

console.log(Object.keys(coolestTvShow));

// CRIE UMA FUNÇÃO QUE EXIBE AS HABILIDADES DO OBJETO STUDENT.
// CADA HABILIDADE DEVE SER EXIBIDA NO FORMATO 'NOME DA HABILIDADE, NÍVEL: VALOR DA CHAVE REFERENTE À HABILIDADE'.

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (const index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);