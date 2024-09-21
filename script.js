function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (peso <= 0 || altura <= 0) {
    document.getElementById('resultado').textContent = 'Por favor, insira valores válidos para peso e altura.';
    return;
  }

  const alturaEmMetros = altura / 100;
  const imc = peso / (alturaEmMetros * alturaEmMetros);

  const resultadoElement = document.getElementById('resultado');
  let resultadoTexto;

  if (imc < 18.5) {
    resultadoTexto = 'Abaixo do peso';
  } else if (imc < 25) {
    resultadoTexto = 'Peso normal';
  } else if (imc < 30) {
    resultadoTexto = 'Sobrepeso';
  } else {
    resultadoTexto = 'Obesidade';
  }

  resultadoElement.textContent = `Seu IMC é: ${imc.toFixed(2)}. Classificação: ${resultadoTexto}`;
}
