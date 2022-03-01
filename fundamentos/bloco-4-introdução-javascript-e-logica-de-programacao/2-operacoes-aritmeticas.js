//JS Tipos primitivos, tipagem dinâmica e operações aritméticas

//No exemplo abaixo, temos as informações de um paciente.
//Utilizar operador typeof para imprimir qual o tipo das variáveis que foram declaradas:

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientInfo.firstName);
console.log(typeof patientInfo.lastName);
console.log(typeof patientEmail);

// O + operador também pode ser usado para adicionar (concatenar) strings:

let text1 = 'Ingris';
let text2 = 'Andrade';
let text3 = text1 +' '+ text2;

console.log(text3);

// O += operador de atribuição também pode ser usado para adicionar (concatenar) strings:

let text4 = 'IAS Code ';
text4 += 'é meu novo perfil no instagram';

console.log(text4);

//Adicionar dois números retornará a soma, mas adicionar um número e uma string retornará uma string:

//Obs: Se você adicionar um número e uma string, o resultado será uma string!

let x = 5 + 5;
let y = "5" + 5;
let z = "Hello " + 5;

console.log(x);
console.log(y);
console.log(z);