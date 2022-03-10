let ingredientItems = [
 '500g de feijão carioquinha cozido',
 '200g de toucinho',
 '1 concha de óleo',
 '1 cebola média picada',
 '4 dentes de alho',
 '5 ovos',
 '1 colher de sopa de sal com alho',
 'Cheiro verde a gosto',
 '200g de farinha de mandioca'
];

const ingredientList = document.querySelector('.ingredients-list');

for (let index = 0; index < ingredientItems.length; index += 1) {
  let ingredient = ingredientItems[index];

  let ingredientListItem = document.createElement('li');
  ingredientListItem.innerText = ingredient;

  ingredientList.appendChild(ingredientListItem);
}

let preparationList = [
  'Coloque o óleo em uma panela e doure a cebola, acrescente o bacon e frite bem.',
  'Adicione algo, sal e ovos, misture com cuidade.',
  'Refogue o feijão, baixe o fogo, misture a farinha aos poucos e o cheiro verde.'
];

const preparationLists = document.querySelector('.recipe-preparation-list');

for (let index = 0; index < preparationList.length; index += 1) {
  let list = preparationList[index];

  let listRecipe = document.createElement('li');
  listRecipe.innerText = list;

  preparationLists.appendChild(listRecipe);
}

/*
No console do navegador: primeiro, foi selecionado o elemento div utilizando o seu id , 'start'. Na sequência, aplicadas as propriedades nextSibling e nextElementSibling . Você pode ver que, nextSibling retornará o texto "nó" que representa o próximo nó do DOM a partir da div , enquanto que, nextElementSibling retornará o próximo elemento propriamente, ou seja, o elemento <p> .

console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>
*/