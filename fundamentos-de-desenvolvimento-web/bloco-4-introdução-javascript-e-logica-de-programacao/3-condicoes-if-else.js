//Vamos praticar: 

//Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;

//Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:

  /*Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
  Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
  Se a nota for menor que 60, imprima "Você foi reprovada(o)"*/

const nota = 90;

if(nota >= 80) {
  console.log('Parabéns, você foi aprovada(o)!');
} else if(nota < 80 && nota >= 60) {
  console.log('Você está na nossa lista de espera!');
} else if(nota < 60){
  console.log('Você foi reprovada(a)!');
}

//Na linguagem JavaScript, temos três principais operadores lógicos: && , || e o ! . Podemos nos referir a eles como "AND", "OR" e "NOT", respectivamente.
  //Esse operador é binário. O que significa que ele precisa de dois elementos para funcionar corretamente. Ele só vai retornar true se as duas operações que estão em volta dele forem consideradas verdadeiras.
  //Ex: Você está numa padaria e quer comer alguma coisa no café da manhã. Então você diz "Por favor, me vê um cafézinho E um pão na chapa".

  const comida = 'Pão na chapa';
  const bebida = 'Cafezinho';

  if(comida === 'Pão na chapa' && bebida === 'Cafezinho') {
    console.log('Muto obrigada pela refeição :)');
  } else {
    console.log('Acho que houve um engano com o meu pedido!');
  }

  //Precisamos manter em mente que só teremos true se as duas expressões em volta dele forem true também:

  const conditionOne = true;
  const conditionTwo = false;

  console.log(conditionOne && conditionTwo);

  //E o que acontece se existir um encadeamento de &&?

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;

console.log(listaDeCompras);

//Prática:

//Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.

//Crie uma variável chamada "message" que, inicialmente, é uma string vazia.

//Implemente condicionais para que:

//Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".

//Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".

//Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".

//Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".

//Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".

const currentHour = 12;
//let message = ;


if(currentHour >= 22) {
  console.log('Não deveríamos comer nada, é hora de dormir');
}else if(currentHour >= 18 && currentHour < 22) {
  console.log('Rango da noite, vamos jantar :D');
}else if(currentHour >= 14 && currentHour < 18) {
  console.log('Vamos fazer um bolo pro café da tarde?');
}else if(currentHour > 11 && currentHour < 14) {
  console.log('Hora do almoço!!!');
}else if(currentHour > 4 && currentHour < 11) {
  console.log('Hmmm, cheiro de café recém passado');
};

//Com o operador OR (ou || , no JavaScript), precisamos apenas que uma das condições sejam verdadeiras: isso ou aquilo 

//O símbolo "||" é a representação em caracter desse operador. Novamente, precisamos de dois elementos em torno dele para que funcione corretamente. E para que seu retorno seja verdadeiro, um de seus valores deve ser true ou ser considerado truthy.

//Por exemplo, imagine novamente que estamos na padaria, mas nosso pedido agora vai ser diferente. Dessa vez, se não tiver um café, pode ser um suco de laranja. 

const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
};


//Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".

//Implemente condicionais para que:

///Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".

//Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".

let weekDay = 'quarta-feira';

if(weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay ==='sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else {
  console.log('FINALMENTE, descanso merecido UwU');
}

//Operador NOT

//Vamos iniciar com um exemplo do que o NOT é capaz, você consegue prever o que esse código vai imprimir?

console.log((2 + 2) === 4);

//Isso aqui deve nos retornar true , não é? Afinal, 2 + 2 resultar em 4 é uma declaração verdadeira. Agora, se adicionarmos o operador NOT antes dessa declaração?

console.log(!(2 + 2) === 4);

//Ele pode inverter o valor booleano de um elemento. Isso mesmo!! Se tivermos uma variável ou valor considerado true , podemos gerar o resultado oposto simplesmente fazendo !variável . Ou seja, false .

//Vale lembrar que o conceito de truthy e falsy também se aplica aqui, por isso não estamos limitados apenas aos tipos primitivos booleanos. Podemos usar em:

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

//Números...

console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

//Valores nulos...

console.log(!null); // true

//Valores indefinidos..

console.log(!undefined); // true

//...e em muitos outros elementos. As possibilidades são enormes!!!