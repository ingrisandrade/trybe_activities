/* document.getElementById('prf-padrao').innerText = 'Me vejo daqui a dois anos nos EUA obtendo novas experiências e conquistando espaços de reconhecimento referente à minha contribuição para todas as pessoas que queiram entrar no mundo da tecnologia.'

function mainContent(elementos, cor) {
  document.getElementsByClassName(elementos)[0].style.backgroundColor = cor;
}
mainContent('main-content', 'rgb(76,164,109)'); 

function centerContent(elementos, cor) {
  document.getElementsByClassName(elementos)[0].style.backgroundColor = cor;
}
centerContent('center-content', 'white');

document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript'; */

function modificaTexto() {
  const paragrafo = document.getElementsByTagName('p')[1];
  paragrafo.innerHTML = 'Me vejo daqui a dois anos nos EUA obtendo novas experiências e conquistando espaços de reconhecimento referente à minha contribuição para todas as pessoas que queiram entrar no mundo da tecnologiaaaaaa.';
}
modificaTexto();

function alteracor() {
  const quadradoAmarelo = document.getElementsByClassName('main-content')[0];
  quadradoAmarelo.style.background = 'rgb(76,164,109)';
}
alteracor();

function mudaQuadradoBranco() {
  const quadradoVermelho = document.getElementsByClassName('center-content')[0];
  quadradoVermelho.style.background = 'white';
}
mudaQuadradoBranco();

function corrigeTitulo() {
  const titulo = document.getElementsByTagName('h1')[0];
  titulo.innerHTML = 'Exercício 5.1 - JavaScript';
}
corrigeTitulo();

function paragrafoComMaiusculas() {
  const paragrafo = document.getElementsByTagName('p')[0];
  paragrafo.innerHTML = paragrafo.innerHTML.toUpperCase();
}
paragrafoComMaiusculas();

function apresentaParagrafos() {
  const paragrafos = document.getElementsByTagName('p');
  for (let index = 0; index < paragrafos.length; index += 1) {
    console.log(paragrafos[index].innerHTML);
  }
}
apresentaParagrafos();