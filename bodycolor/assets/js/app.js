'use strict'

const buttonCor = document.querySelector('#colorSubmit');
let corInput = document.querySelector('#colorInput');

const geraCor = () => {
    let corInput = document.querySelector('#colorInput').value;

    if(corInput === 'amarelo') return mudaCor('#FFFF00'); //document.documentElement.style.setProperty('--bg-color', '#FFFF00');
    if(corInput === 'azul') return mudaCor('#0000FF'); //document.documentElement.style.setProperty('--bg-color', '#0000FF');
    if(corInput === 'vermelho') return mudaCor('#FF0000'); //document.documentElement.style.setProperty('--bg-color', '#FF0000');
    if(corInput === 'verde') return mudaCor('#00FF00'); //document.documentElement.style.setProperty('--bg-color', '#00FF00');
    else return alert('Digite uma cor válida [azul, vermelho, amarelo ou verde]');
}

const mudaCor = (color) => {
    document.documentElement.style.setProperty('--bg-color', color);
}

corInput.addEventListener('change', geraCor)

// buttonCor.addEventListener('click', (e) => {
//   e.preventDefault();
//   geraCor();
// });
