// loginValidation.test.js
const {
    greetingMessage,
    loginErrorMessage,
    verifyCredentials,
  } = require("./loginValidation.js");
  
  describe("a função verifyCredentials()", () => {
    
    it("verifyCredentials() calls the correct function depending on the user and password input", () => {
      
      const user = {
        userName: 'Bob',
        password: 123456,
      };
        
      const { userName, password } = user;
  
      expect(verifyCredentials({ userName, password })).toBe(
        "Hello, Joana! Que bom ter você de volta"
      ); 
    });
  
    it("greetingMessage() returns a message in the format: `Hello, ${user}! Que bom ter você de volta`", () => {
      expect(greetingMessage("Lucas")).toBe(
        "Hello, Lucas! Que bom ter você de volta"
      );
    });
  
    it("loginErrorMessage() returns a message in the format: `Pessoa usuária '${user}' não encontrada, tente novamente!`", () => {
      expect(loginErrorMessage("Bob")).toBe(
        "Pessoa usuária 'Bob' não encontrada, tente novamente!"
      );
    });  
  });

// REPRODUÇÃO DA AULA DE TESTES COM JEST - PARTE I

const numeros = require('./loginValidation');

describe('Requisito 1', () => {
  test('A função recebe [1, 2, 3, 4, 5] e retorna true', () => {
    expect(true).toEqual(numeros([1, 2, 3, 4, 5]));
  })
})
