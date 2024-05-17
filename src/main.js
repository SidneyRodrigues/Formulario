document.getElementById('my-form').addEventListener('submit', function(funcao){
  funcao.preventDefault();

  const campoA = parseFloat(document.getElementById('campoA').value);
  const campoB = parseFloat(document.getElementById('campoB').value);

  const resultados = document.getElementById('result');

  if (campoB > campoA) {
    resultados.innerHTML = 'Resultado válido: Campo B é maior que Campo A.'
    resultados.className = 'text correto'
  } else {
    resultados.innerHTML = 'Formulário inválido: Campo B deve ser maior que Campo A.';
    resultados.className = 'text incorreto';
}
});