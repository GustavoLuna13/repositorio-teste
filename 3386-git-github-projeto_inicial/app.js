let listaDeNumerosSorteados = [];
let numeroLimite = 1000;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 1000');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor, tente novamente');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior, tente novamente');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

//ANOTAÇÕES PARA COMANDOS COM O GIT NO TERMINAL
//
//git status: verifica quais arquivos foram modificados
//git add: adiciona as mudanças (o "git add ." adiciona todas as mudanças feitas no projeto)
//git commit: registra as mudanças no repositório local (git commit -m "EXPLICAÇÃO")
//git push: leva as mudanças do repositório local para o repositório remoto (git push origin main)
//git pull: baixa as mudanças do repositório remoto para o repositório local (git pull origin main)
//git log: mostra o histórico de mudanças do projeto
//git revert: reverte as mudanças feitas de um determinado commit, o comando não deleta o commit ou reescreve por cima, mas sim cria um novo commit com as mudanças revertidas
//revertidas (git revert ID DO COMMIT)
//git reset: deleta o último commit realizado dentro do repositório local (git reset --hard ID DO COMMIT ANTERIOR DO QUAL VOCÊ QUER APAGAR, NÃO DO COMMMIT QUE VOCÊ QUER APAGAR) 
//OBS: o comando para deletar é recomendado apenas para repositórios locais, caso o commit já tenha sido enviado para o repositório remoto o ideal seria não apagá-lo
//
//OBS: é possível realizar um commit no vs code através do menu na lateral esquerda (source control). O passo a passo é o mesmo do terminal (adicionar os arquivos,
//realizar o commit com um comentário e levar as mudanças para o repositório remoto) só que de maneira mais simples




