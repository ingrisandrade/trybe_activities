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
