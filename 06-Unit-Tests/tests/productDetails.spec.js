const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    const product = productDetails('alcool gel', 'máscara');
    const one = product[0].details.productId;
    const two = product[1].details.productId;
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(Array.isArray(product), true);

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(product.length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof product, 'object');

    // Teste que os dois objetos são diferentes entre si.
   assert.notDeepStrictEqual(product[0], product[1]);

    // Teste que os dois productIds terminam com 123.
assert.strictEqual = one.slice(-3), two.slice(-3);
  });
});
