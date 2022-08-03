'use strict'

const buttonSoma = document.querySelector('#button-somar');
const buttonSubtrai = document.querySelector('#button-subtrair');
const buttonMultiplica = document.querySelector('#button-multiplicar');
const buttonDivide = document.querySelector('#button-dividir');
let divResultado = document.querySelector('#resultado');

function pegarValores() {
  const numero1 = document.querySelector('#numero1').value;
  const numero2 = document.querySelector('#numero2').value;
};

buttonSoma.addEventListener('click', () => {
  pegarValores();

  divResultado.textContent = `A soma de ${numero1.value} + ${numero2.value} = ${somar(numero1.value, numero2.value)}`;
  console.log(Calculadora1.somar());
});

buttonSubtrai.addEventListener('click', () => {
  pegarValores();

  divResultado.textContent = `A subtração de ${numero1.value} - ${numero2.value} = ${subtrair(numero1.value, numero2.value)}`;
});

buttonMultiplica.addEventListener('click', () => {
  pegarValores();

  divResultado.textContent = `A multiplicação de ${numero1.value} * ${numero2.value} = ${multiplicar(numero1.value, numero2.value)}`;
});

buttonDivide.addEventListener('click', () => {
  pegarValores();

  divResultado.textContent = `A divisão de ${numero1.value} / ${numero2.value} = ${dividir(numero1.value, numero2.value)}`;
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
