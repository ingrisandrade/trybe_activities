// Adicionando elementos no HTML de forma dinâmica com JS, nesse caso é uma lista.

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
  ingredientListItem.className = 'ingredients-list-item'; // Classe criada para ser recuperada na variável criada para a remoção de um dos elementos da lista.

  ingredientList.appendChild(ingredientListItem);
}

// Removendo elementos no HTML de forma dinâmica com JS, nesse caso será removido apenas um elemento dentro da lista.
// O elemento removido será o toucinho.

const ingredientListItems = document.querySelectorAll('.ingredients-list-item');
// para recuperar todos os itens da lista foi necessário criar uma classe na função anterior que criou a lista.
for (let index = 0; index < ingredientListItems.length; index +=1) {
  let element = ingredientListItems[index] // recuper o elemento html que está dentro do array

  if (element.innerText.includes('toucinho')) {
    ingredientList.removeChild(element);
  }
}

// Adicionando elementos no HTML de forma dinâmica com JS, nesse caso é uma lista.

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