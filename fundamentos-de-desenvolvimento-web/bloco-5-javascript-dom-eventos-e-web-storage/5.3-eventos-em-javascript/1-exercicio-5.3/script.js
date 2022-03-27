const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'.

function addNewClass(event) {
  const classElement = document.querySelector('.tech');
  classElement.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}
firstLi.addEventListener('click', addNewClass);
secondLi.addEventListener('click', addNewClass);
thirdLi.addEventListener('click', addNewClass);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

 function changeText(event) {
   const techElement = document.querySelector('.tech');
   techElement.innerText = event.target.value;
 }
 input.addEventListener('input', changeText);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

function webPage() {
  window.location.replace('https://blog.betrybe.com/');
}
myWebpage.addEventListener('dblclick', webPage);

/* myWebpage.addEventListener('dblclick', function() {
  window.location.replace('https://blog.betrybe.com/');
}) */