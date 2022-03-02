let cantor = {
  nome: 'Milton',
  sobreNome: 'Nascimento',
  apelido: 'Bituca',
  idade: 77,
  melhoresAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
  ondeNasceu: {  //o valor também pode ser outro objeto.
    cidade: 'Rio de Janeiro',
    estado: 'Rio de Janeiro'
  }
}

console.log('O cantor ' + cantor.nome + ' ' + cantor.sobreNome + ' possui ' + cantor.idade + ' anos.');

console.log('O cantor ' + cantor['nome'] + ' ' + cantor['sobreNome'] + ' possui ' + cantor['idade'] + ' anos.');

cantor['nomeCompleto'] = cantor.nome + ' ' + cantor.sobreNome;

console.table(cantor);

//Acesso a todas as propriedades, incluse o segundo objeto.

console.log('O cantor ' + cantor.nome + ' ' + cantor.sobreNome + ' nasceu no Estado do ' + cantor.ondeNasceu.estado + ', na cidade ' + cantor.ondeNasceu.cidade + '.');


//------------------------------------------------------------

//As chaves de um objeto são armazenadas como strings e, para conseguir acessar propriedades nomeadas com números, como 0 , por exemplo, só é possível usando a notação de colchetes . Se você usar a notação de ponto , ocorre um erro. Ao usar a notação de colchetes também é possível chamar variáveis que fazem relação com a chave que você quer acessar dentro desses colchetes.

let diasDaSemana = {
  1: 'domingo',
  2: 'segunda',
  3: 'terça',
  4: 'quarta',
  5: 'quinta',
  6: 'sexta',
  7: 'sábado',
};

//diasDaSemana.1; // SyntaxError: Unexpected number
console.log(diasDaSemana['1']); // domingo

//-------------------------------------------------------------

//Neste exemplo, a chave banco do objeto conta , guarda um outro objeto, e também há o uso de variável na notação de colchetes, além de você poder ver exemplos usando notação de ponto e notação de colchetes.

let conta = {
  agencia: '0000',
  banco: {
    cod: '012',
    id: 4,
    nome: 'TrybeBank',
  },
};

let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
console.log(conta[infoDoBanco]['nome']); // TrybeBank

console.log(conta.agencia); // 0000
console.log(conta['agencia']); // 0000

console.log(conta.banco.cod); // 012
console.log(conta['banco']['id']); // 4

//veja como vamos adicionar as informações de forma encadeada:

//O objeto deste exemplo possui a chave infoPessoal que possui outras 3 chaves, uma delas sendo endereco , que é outro objeto! Ou seja, o objeto usuario possui outros dois dentro dele.

let usuario = {
  id: 99,
  email: 'jakeperalta@gmail.com',
  infoPessoal: {
    nome: 'Jake',
    sobrenome: 'Peralta',
    endereco: {
      rua: 'Smith Street',
      bairro: 'Brooklyn',
      cidade: 'Nova Iorque',
      estado: 'Nova Iorque',
    },
  },
};

console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com

console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

//Agora, e se o nosso objeto está dentro de um array? Como acessamos as propriedades do objeto?

let moradores = [
  {
    nome: 'Luiza',
    sobrenome: 'Guimarães',
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: 'William',
    sobrenome: 'Albuquerque',
    andar: 5,
    apartamento: 502,
  },
  {
    nome: 'Murilo',
    sobrenome: 'Ferraz',
    andar: 8,
    apartamento: 804,
  },
  {
    nome: 'Zoey',
    sobrenome: 'Brooks',
    andar: 1,
    apartamento: 101,
  },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey

//Esse último bloco de código é um exemplo de um array composto por objetos. Os objetos desejados foram acessados através dos seus índices e armazenados dentro de variáveis para facilitar a compreensão.
//Perceba que o nome que escolhemos para a função é um nome composto, e para a escrita de nomes compostos em JavaScript existem algumas convenções. Uma delas é a kebab case , onde o nome fica separado por um traço. Apesar de ser uma convenção, não é uma boa prática de escrita, pois muitas linguagens interpretam o traço como um sinal de subtração, o que pode ocasionar bugs.