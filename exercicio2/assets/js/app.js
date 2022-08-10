'use strict';

function validaNumero() {
  const valorInput = document.querySelector('#numero1').value;
  if (valorInput < 0) return valorInput * -1;
  else return valorInput;
}

const exibeNumero = (e) => {
  e.preventDefault();
  const resultDiv = document.querySelector('.result');

  resultDiv.textContent = `O numero inserido positivo é: ${validaNumero()}`;
};

document
  .querySelector('#button-calcular')
  .addEventListener('click', exibeNumero);
