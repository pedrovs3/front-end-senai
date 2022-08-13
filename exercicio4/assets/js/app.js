const pegarValores = () => {
  const numero1 = document.querySelector('#numero1').value;
  const numero2 = document.querySelector('#numero2').value;
  const numero3 = document.querySelector('#numero3').value;
  const numero4 = document.querySelector('#numero4').value;
  const numerosArray = [numero1, numero2, numero3, numero4];

  return numerosArray;
};

const divisivelPorDois = (numeros) => {
  const divisivelPorDois = new Array();

  for (let i = 1; i <= 4; i++) {
    if (numeros[i] % 2 == 0) divisivelPorDois.push(numeros[i]);
  }

  return divisivelPorDois;
};

const divisivelPorTres = (numeros) => {
  const divisivelPorTres = new Array();

  for (let i = 1; i <= 4; i++) {
    if (numeros[i] % 3 == 0) divisivelPorTres.push(numeros[i]);
  }
  return divisivelPorTres;
};

const mostraValores = (e) => {
  e.preventDefault();
  const numeros = pegarValores();

  document
    .querySelector('.result')
        .textContent = `Divisiveis por 2: [${divisivelPorDois(numeros)}] || Divisiveis por 3: [${divisivelPorTres(numeros)}]`;
};

document
  .querySelector('#button-calcular')
  .addEventListener('click', mostraValores);
