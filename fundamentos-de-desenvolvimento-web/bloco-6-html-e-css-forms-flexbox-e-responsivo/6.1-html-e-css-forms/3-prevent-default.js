const button = document.querySelector('#buttonSubmit');
let inputNameUser = document.querySelector('#inputNameUser');
const nameUser = document.querySelector('#nameUser');

function getUserValue(event) { /* Adicionamos um parâmetro à função, nesse caso é o EVENT */
  event.preventDefault();
  console.log(inputNameUser.value);
  nameUser.addEventListener('click', getUserValue);
}
button.addEventListener('click', getUserValue);

/* 
O PREVENT DEFAULT previne que o comportamento padrão de um evento seja executado. */