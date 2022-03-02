/* function headerContainer (elementos, cor) {
  document.querySelector(elementos).style.backgroundColor = cor;
}
headerContainer('#header-container', '#006400')

function container (elementos, cor) {
  document.querySelector(elementos).style.backgroundColor = cor;
}
container('#container', 'white');

function emergencyTasks(elementos, cor) {
  document.querySelector(elementos).style.backgroundColor = cor;
}
emergencyTasks('.emergency-tasks', '#B8860B');

function emergencyH3(elementos, cor) {
  document.querySelectorAll(elementos)[0].style.backgroundColor = cor;
  document.querySelectorAll(elementos)[1].style.backgroundColor = cor;
}
emergencyH3('h3', '#BDB76B');

function noEmergencyTasks(elementos, cor) {
  document.querySelector(elementos).style.backgroundColor = cor;
}
noEmergencyTasks('.no-emergency-tasks', '#008B8B');

function tituloNoEmergency(elementos, cor) {
  document.querySelectorAll(elementos)[0].style.backgroundColor = cor;
  document.querySelectorAll(elementos)[1].style.backgroundColor = cor;
}
tituloNoEmergency('.titulo-no-emergency', '#20B2AA');

function footerContainer(elementos, cor) {
  document.querySelector(elementos).style.backgroundColor = cor;
}
footerContainer('#footer-container', '#D3D3D3'); */

const header = document.getElementById('header-container');
header.style.backgroundColor = '#006400';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = '#B8860B';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = '#BDB76B';
}

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = '#008B8B';

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = '#20B2AA';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#D3D3D3';