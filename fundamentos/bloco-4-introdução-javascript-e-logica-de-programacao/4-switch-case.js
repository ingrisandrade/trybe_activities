let semaforo = 'vermelho';

switch(semaforo) {
  case 'vermelho':
    console.log('pare');
    break;
  
  case 'amarelo':
    console.log('atenção');
    break;

  case 'verde':
    console.log('siga');
    break;

  default:
    console.log('valor não identificado');
} 

//Prática:

//Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;


let candidata = 'aprovada';

switch (candidata) {
  case 'aprovada':
    console.log('siga');
    break;

  case 'lista':
    console.log('atenção');
    break;

  case 'reprovada':
    console.log('pare');
    break;

  default:
    console.log('não se aplica');
}

//A estrutura switch/case é utilizada quando queremos executar diferentes ações. A expressão que passamos para o switch é avaliada apenas uma vez, e o seu valor é comparado em cada caso. Se essa comparação for verdadeira, o código do caso avaliado é executado. Se nenhum valor satisfizer os casos listados, é executado o código em default .