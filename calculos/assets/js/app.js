const buttonSoma = document.querySelector('#button-somar');
const buttonSubtrai = document.querySelector('#button-subtrair');
const buttonMultiplica = document.querySelector('#button-multiplicar');
const buttonDivide = document.querySelector('#button-dividir');
let divResultado = document.querySelector('#resultado');

buttonSoma.addEventListener('click', () => {
  const numero1 = document.querySelector('#numero1').value;
  const numero2 = document.querySelector('#numero2').value;

  
  divResultado.textContent = `A soma de ${numero1} + ${numero2} = ${somar(numero1, numero2)}`;
});

buttonSubtrai.addEventListener('click', () => {
  const numero1 = document.querySelector('#numero1').value;
  const numero2 = document.querySelector('#numero2').value;

  subtrair(numero1, numero2);
  divResultado.textContent = `A subtração de ${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`;
});

buttonMultiplica.addEventListener('click', () => {
  const numero1 = document.querySelector('#numero1').value;
  const numero2 = document.querySelector('#numero2').value;

  multiplicar(numero1, numero2);
  divResultado.textContent = `A multiplicação de ${numero1} * ${numero2} = ${multiplicar(numero1, numero2)}`;
});

buttonDivide.addEventListener('click', () => {
  const numero1 = document.querySelector('#numero1').value;
  const numero2 = document.querySelector('#numero2').value;

  dividir(numero1, numero2);
  divResultado.textContent = `A divisão de ${numero1} / ${numero2} = ${dividir(numero1, numero2)}`;
});

function somar(numero1, numero2) {
  return Number(numero1) + Number(numero2);
};

function subtrair(numero1, numero2) {
  return numero1 - numero2;
};

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
};

function dividir(numero1, numero2) {
  return numero1 / numero2;
};

