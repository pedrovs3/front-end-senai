'use strict'

// const pessoa1 = {
//   nome: 'Pedro',
//   idade: 16
// };

// const numero1 = 1;
// const numero2 = 3;

// console.log(`Meu nome é ${pessoa1.nome} e minha idade é ${pessoa1.idade} anos`);
// console.log(`A soma dos numeros é ${numero1 + numero2}`);

// class Pessoa {
//   constructor(nome, sobrenome){
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }

//   nomeCompleto = () => {
//     return `${this.nome} ${this.sobrenome} `;
//   }
// };

// const pessoa2 = new Pessoa('Leonardo', 'Moreira');
// console.log(pessoa2.nome, pessoa2.sobrenome);
// console.log(pessoa2.nomeCompleto());

// const nome = prompt('Digite seu nome:');
// const sobrenome = prompt('Digite seu sobrenome: ');

const buttonJuntar = document.querySelector('#button');
const resultado = document.querySelector('#resultado');

buttonJuntar.addEventListener('click', () => juntarNome());

function juntarNome() {
  const nome = document.querySelector('#nome').value;
  const sobrenome = document.querySelector('#sobrenome').value;

  //console.log(`Seu nome completo é : ${nome} ${sobrenome}`);
  resultado.textContent = `Seu nome completo é : ${nome} ${sobrenome}.`
}