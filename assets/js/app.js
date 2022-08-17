const projetosDiv = document.querySelector('.exercicio-container');

const mostraExerc = (e) => {
  if (e.target.id == 'projetoA') projetosDiv.src = './exercicio1/';
  if (e.target.id == 'projetoB') projetosDiv.src = './exercicio2/';
  if (e.target.id == 'projetoC') projetosDiv.src = './exercicio3/';
  if (e.target.id == 'projetoG') projetosDiv.src = './exercicio4/';
  if (e.target.id == 'projetoK') projetosDiv.src = './exercicio5/';
  if (e.target.id == 'projetoO') projetosDiv.src = './exercicio6/';
};

document.addEventListener('click', mostraExerc);
