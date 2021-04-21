var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio)

var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var alto_ou_baixo = document.querySelector('.alto_ou_baixo');

var enviarPalpite = document.querySelector('.enviarPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

var contadorPalpites = 1;
var botaoReiniciar;

campoPalpite.focus();

function conferirPalpite() {
    var palpiteDoUsuario = Number(campoPalpite.value);
    if (contadorPalpites === 1) {
        palpites.textContent = 'Palpites anteriores: ';
    }
    palpites.textContent += palpiteDoUsuario + " ";

    if (palpiteDoUsuario === numeroAleatorio) {
        ultimoResultado.textContent = "PARABÉNS! Você acertou!";
        ultimoResultado.style.backgroundColor = 'green';
        alto_ou_baixo.textContent = "";
        configFimdeJogo();
    } else if (contadorPalpites === 10) {
        ultimoResultado.textContent = "Acabaram as tentativas! FIM DE JOGO!";
        alto_ou_baixo.textContent = "";
        configFimdeJogo();
    } else {
        ultimoResultado.textContent = "ERROU! Tente novamente!";
        ultimoResultado.style.backgroundColor = 'red';
    }

    if (palpiteDoUsuario < numeroAleatorio) {
        alto_ou_baixo.textContent = "Seu palpite está muito baixo!";
    } else if (palpiteDoUsuario > numeroAleatorio) {
        alto_ou_baixo.textContent = "Seu palpite está muito alto!"
    }

    contadorPalpites++;
    campoPalpite.value = "";
    campoPalpite.focus();
}

function configFimdeJogo() {
    campoPalpite.disabled = true;
    enviarPalpite.disabled = true;
    
    botaoReiniciar = document.createElement('button');
    botaoReiniciar.textContent = "Iniciar novo jogo!";
    document.body.appendChild(botaoReiniciar);
    botaoReiniciar.addEventListener('click', reiniciarJogo());
}

function reiniciarJogo() {
    contadorPalpites = 1;

    var reiniciarResultado = document.querySelectorAll('.resultado');
    for (var i = 0; i < reiniciarResultado.length; i++) {
        reiniciarResultado[i].textContent = "";
    }

    botaoReiniciar.parentNode.removeChild(botaoReiniciar);

    campoPalpite.disabled = false;
    enviarPalpite.disabled = false;
    campoPalpite.value = "";
    campoPalpite.focus();

    ultimoResultado.style.backgroundColor = 'white';

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    console.log(numeroAleatorio)
}