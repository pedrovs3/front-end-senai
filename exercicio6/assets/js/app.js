const multiplicaValor = () => {
  const valor = document.querySelector('#numero1').value;

  const valorMultiplicado = valor * 2;

  return { valorMultiplicado, valor };
};

const valorMaiorQueTrinta = () => {
  const { valorMultiplicado, valor } = multiplicaValor();

  if (valorMultiplicado >= 30) return `${valor} x 2 = ${valorMultiplicado}`;
};

const mostraValor = (e) => {
  e.preventDefault();

  const resultDiv = document.querySelector('.result');

  resultDiv.textContent = valorMaiorQueTrinta();
}

document.querySelector('#button-calcular').addEventListener('click', mostraValor)
