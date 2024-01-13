function calculateSquareRoot(radicand) {
  if (radicand < 0) {
    throw new Error('O radicando deve ser real e positivo');
  }
  return radicand ** (1 / 2);
}

function calculatePythagoras(side1, side2) {
  try {
    const sum = side1 ** 2 + side2 ** 2;
    return calculateSquareRoot(sum);
  }catch (error) {
    console.log(error);
  }
}

 

const firstSideRef = document.getElementById('side-1');
const secondSideRef = document.getElementById('side-1');
const calculateButton = document.getElementById('calculate-hypotenuse');
const answerDiv = document.getElementById('answer');

function onCalculateButtonClick() {
  try {
  console.log('estabelecendo conexão com banco de dados');
  const firstSide = Number(firstSideRef.value);
  const secondSide = Number(secondSideRef.value);
  if (
    isNaN(firstSide) ||
    isNaN(secondSide) ||
    firstSide <= 0 ||
    secondSide <= 0 
  ) {
    throw new Error('entradas invalidas. Os tamanhos dos catetos devem ser fornecidos , e seus valores numeros positivos exclusivamente');
  }

  answerDiv.classList.remove('hidden-element');
  answerDiv.innerHTML = `A hipotenusa de um triangulo de lados ${firstSide} e ${secondSide} é: ${calculatePythagoras(
    firstSide,
    secondSide
  )
   .toFixed(3)
    .replace(/[.,]000$/, '')}
  <div class="left-point"></div>`;
  console.log('Operação com com banco dedas bem sucedida');
} catch (error) {
  console.log(error);
  console.log('Operação com com banco dedas não foi bem sucedida');
} finally {
  console.log('encerrando conexão com banco dedos!');
  console.log('volta sempre!')
}
}

calculateButton.addEventListener('click', onCalculateButtonClick);
