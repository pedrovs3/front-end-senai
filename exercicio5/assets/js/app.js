const pegaValor = () => {
  const numero = document.querySelector('#numero1').value;

  return numero;
};

const range = () => {
  const numero = pegaValor();

  if (numero >= 1 && numero <= 9) {
    return 'está na faixa indicada';
  } else {
    return 'está fora da faixa de [1 - 9]';
  }
};

const mostraValor = (e) => {
  e.preventDefault();
  const resultDiv = document.querySelector('.result');
  resultDiv.textContent = `O numero ${pegaValor()} ${range()}`;
};

document
  .querySelector('#button-calcular')
  .addEventListener('click', mostraValor);
