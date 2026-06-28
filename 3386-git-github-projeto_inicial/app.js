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

//GUIA PARA O USO GIT E GITHUB
//
//1. DIFERENÇAS
///
//O Git é uma ferramenta para a criação de repositórios locais, ou seja, o projeto e suas alterações ficam salvos apenas localmente 
//no computador do programador. Já o GitHub cria um repositório remoto, ou seja, o repositório fica salvo na nuvem e qualquer pessoa
//tem acesso (caso você configure para público no GitHub)
//
//2. COMO USAR
//
//Primeiramente, é necessário instalar o Git no computador para que haja a interação e criação com o repositório local. Após a instalação, será necessário seguir o passo 
//a passo do GitHub para colocar os arquivos do repositório local para o remoto através do Git. Para que haja a sincronização com os dois repositório, é preciso a criação de 
//uma chave de acesso no Git e colocar essa chave no seu repositório remoto GitHub (pesquisar para mais detalhes).
// 
//3.COMANDOS COM O GIT NO TERMINAL
//
//git status: verifica quais arquivos foram modificados;
//git add: adiciona as mudanças (o "git add ." adiciona todas as mudanças feitas no projeto);
//git commit: registra as mudanças no repositório local (git commit -m "EXPLICAÇÃO");
//git commit --amend -m "EXPLICAÇÃO": altera o último commit, mudando a mensagem e/ou adicionando alterações extras pequenas;
//git push: leva as mudanças do repositório local para o repositório remoto (git push origin main);
//git pull: baixa as mudanças do repositório remoto para o repositório local (git pull origin main);
//git log: mostra o histórico de mudanças do projeto;
//git revert: reverte as mudanças feitas de um commit, esse comando cria um novo commit com as mudanças revertidas, mas o commit 
//escolhido não é deletado nem reescrito (git revert ID DO COMMIT);
//git reset: deleta o úlitmo commit do repositório local no histórico (git reset --hard ID DO COMMIT ANTERIOR DO QUAL VOCÊ QUER APAGAR).
//OBS: o comando git reset é recomendado apenas para apagar commits locais, o ideal é não apagar commits no repositório remoto.
//
//OBS: é possível realizar um commit no vs code através do menu na lateral esquerda (source control). O passo a passo é o mesmo do terminal (adicionar os arquivos,
//realizar o commit com um comentário e levar as mudanças para o repositório remoto) só que de maneira mais simples
//
//4.BOAS PRÁTICAS: USO DE COMMITS
//
//O uso de commits deve ser feita de forma prudente. Não é recomendável atualizar constantemente as commits, já que isso pode causar
//problemas de entendimento das atualizações feitas ao longo do projeto, a exemplo de criações/alterações constantes de commits e 
//mudanças constantes no histórico. Além disso, não se deve alterar o histórico de commits no repositório remoto, já que todos os
//colaboradores do projeto tem acesso a esse repositório em comum, o que pode causar problemas.
//
//5. ARQUIVOS IGNORADOS
//
//Caso você queira levar as mudanças para o repositório remoto desconsiderando arquivos desnecessários ou confidenciais, é possível criar um novo arquivo chamado ".gitignore".
//Com ele, você escreve os arquivos ou pastas que você quer que o Git ingnore no processo do git push. Assim, os arquivos do repositório remoto serão atualizados,
//desconsiderando os arquivos dentro do .gitignore
//
//6. README
//
//No GitHub, o README existe para explicar o que o repositório faz e como o usuário se situar nele. é possível criar esse arquivo tanto no GitHub, quanto no projeto do
//repositório local. Ao criar no GitHub, o arquivo README.md aparece automaticamente no repositório remoto, e para colocar ele no seu repositório local, basta utilizar
//o comando git pull. O README funciona de forma semelhante ao HTML  
//
//7. GIST
//
//Os repositórios são ferramentas os quais dão a possibilidade de compartilhar o projeto para alguém ou chamar alguém para colaborar no projeto. Contudo, há uma ferramenta do 
//GitHub que dá a possibilidade de compartilhar apenas um trecho do código sem a necessidade de criar um repositório, que é o Gist. Para criar o Gist, basta ir na parte
//superior do site onde há um "+" e apertar em "New gist". Coloque título, tipo de arquivo e o trecho do código, caso queira colocar mais de um tipo de arquivo, basta clicar
//no botão em baixo da caixa onde há o código anterior.




