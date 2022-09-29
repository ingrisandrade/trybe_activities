import React from "react";

// Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log(). Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!

// Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log().

function buttonClick() {
  console.log('clicked on the button');
}

function buttonClickTwo() {
  console.log('clicked on the button 2');
}

function buttonClickThree() {
  console.log('clicked on the button 3');
}

class App extends React.Component {
  render() {
    return(
    <>
    <button onClick={ buttonClick }>Click Here</button>
    <button onClick={ buttonClickTwo }>Click Here</button>
    <button onClick={ buttonClickThree }>Click Here</button>
    </>
    );
  }
}

export default App;
