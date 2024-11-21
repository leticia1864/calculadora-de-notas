document.getElementById('formNotas').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o envio do formulário

    // Captura os valores das notas
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    // Calcula a média
    const media = (nota1 + nota2 + nota3) / 3;

    // Exibe o resultado
    const resultadoDiv = document.getElementById('resultado');
    if (media >= 7) {
        resultadoDiv.textContent = `Média: ${media.toFixed(2)} - Aprovado!`;
        resultadoDiv.className = 'resultado aprovado';
    } else {
        resultadoDiv.textContent = `Média: ${media.toFixed(2)} - Reprovado!`;
        resultadoDiv.className = 'resultado reprovado';
    }
});
