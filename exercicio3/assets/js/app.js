'use strict';

const pegarValores = () => {
  const nota1 = Number(document.querySelector('#nota1').value);
  const nota2 = Number(document.querySelector('#nota2').value);
  const nota3 = Number(document.querySelector('#nota3').value);
  const nota4 = Number(document.querySelector('#nota4').value);
  const notasArray = [nota1, nota2, nota3, nota4];

  return notasArray;
};

const calcularMedia = () => {
  const somaNotas = pegarValores().reduce((ac, nota) => {
    ac += nota;
    return ac;
  });

  const mediaAritmetica = somaNotas / pegarValores().length;

  return mediaAritmetica;
};

const aprovacao = (mediaAritmetica) => {
  if (mediaAritmetica < 5) return 'reprovado';
  else return 'aprovado';
};

const exibeMedia = (e) => {
  e.preventDefault();
  const mediaAritmetica = calcularMedia();
  const resultDiv = document.querySelector('.result');
  const form = document.querySelector('#form');
  if(form.reportValidity()) {
    resultDiv.textContent = `A média do aluno é: ${mediaAritmetica} | O aluno está ${aprovacao(mediaAritmetica)}`;
  }
  else{}
};

document
  .querySelector('#button-calcular')
  .addEventListener('click', exibeMedia);
