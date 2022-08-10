'use strict';

const pegarValores = () => {
  const numero1 = Number(document.querySelector('#numero1').value);
  const numero2 = Number(document.querySelector('#numero2').value);
  const resultDiv = document.querySelector('#result');

  return { numero1, numero2, resultDiv };
};

const calculaDiferenca = () => {
  const { numero1, numero2 } = pegarValores();
  if (numero1 > numero2)
    return { diferenca: numero1 - numero2, maiorNumero: numero1 };
  else return { diferenca: numero2 - numero1, maiorNumero: numero2 };
};

const exibeMaior = (e) => {
  e.preventDefault();
  const { resultDiv } = pegarValores();
  const { diferenca, maiorNumero } = calculaDiferenca();

  resultDiv.textContent = `A diferença entre os valores é: ${diferenca} e o maior valor é: ${maiorNumero}`;
};

document
  .querySelector('#button-calcular')
  .addEventListener('click', exibeMaior);
