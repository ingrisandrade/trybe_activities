// loginValidation.js
const greetingMessage = (user) => {
    return `Hello, ${user}! Que bom ter você de volta`;
  };
  
  const loginErrorMessage = (user) => {
    return `Pessoa usuária '${user}' não encontrada, tente novamente!`;
  };
  
  const user = {
    userName: "Joana",
    password: 123456,
  };
  
  const verifyCredentials = ({ userName, password }) => {
    if (password === 123456 && userName === "Joana") {
      return greetingMessage(userName);
    } else {
      return loginErrorMessage(userName);
    }
  };
  
  const { userName, password } = user;
  
  module.exports = { greetingMessage, loginErrorMessage, verifyCredentials }

// Neste exemplo o teste esperava receber como valor um objeto contendo uma pessoa usuária com o nome "Joana", mas ao invés disso recebeu "Bob".

// REPRODUÇÃO DA AULA DE TESTES COM JEST - PARTE I
const numeros = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') {
      return false;
    }
  }
  return true;
}
 module.exports = numeros;