// Variáveis do jogo
var numeroSecreto;
var tentativasRestantes = 10;

// Função para iniciar o jogo
function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = 10;
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('tentativas').innerHTML = 'Tentativas restantes: 10';
    document.getElementById('palpite').value = '';
    document.getElementById('btnNovo').style.display = 'none';
    document.getElementById('palpite').disabled = false;
}

// Função principal do jogo
function chutar() {
    var palpite = parseInt(document.getElementById('palpite').value);
    var resultado = document.getElementById('resultado');
    
    // Verificar se é um número válido
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        resultado.innerHTML = 'Digite um número entre 1 e 100!';
        resultado.className = 'erro';
        return;
    }
    
    tentativasRestantes--;
    
    // Verificar se acertou
    if (palpite == numeroSecreto) {
        resultado.innerHTML = 'Parabéns! Você acertou o número ' + numeroSecreto + '!';
        resultado.className = 'sucesso';
        fimDeJogo();
    }
    // Verificar se perdeu
    else if (tentativasRestantes == 0) {
        resultado.innerHTML = 'Você perdeu! O número era ' + numeroSecreto + '.';
        resultado.className = 'erro';
        fimDeJogo();
    }
    // Dar dicas
    else {
        if (palpite < numeroSecreto) {
            resultado.innerHTML = 'O número secreto é maior!';
        } else {
            resultado.innerHTML = 'O número secreto é menor!';
        }
        resultado.className = 'dica';
        document.getElementById('tentativas').innerHTML = 'Tentativas restantes: ' + tentativasRestantes;
    }
    
    // Limpar input
    document.getElementById('palpite').value = '';
}

// Função para terminar o jogo
function fimDeJogo() {
    document.getElementById('palpite').disabled = true;
    document.getElementById('tentativas').innerHTML = '';
    document.getElementById('btnNovo').style.display = 'inline-block';
}

// Função para novo jogo
function novoJogo() {
    iniciarJogo();
}

// Permitir jogar com Enter
document.getElementById('palpite').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        chutar();
    }
});

// Iniciar o jogo quando a página carregar
window.onload = function() {
    iniciarJogo();
};
