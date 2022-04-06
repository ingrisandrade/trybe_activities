/*  A linha module.exports = sum exporta a função sum no primeiro arquivo para que possa ser utilizada em outros módulos. No segundo arquivo, utilizamos require('./sum') para importar a função sum .  */

const sum = (a, b) => a + b;

module.exports = sum; // Essa linha exporta a função para ser utilizada no segundo arquivo.
