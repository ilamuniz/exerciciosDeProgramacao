let dados = document.querySelector('input#numini')
let lista = document.querySelector('select#listafim')
let resultado = document.querySelector('div#resultado')
let valores = []

function iNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function calcular() {
    if (iNumero(dados.value) && !inLista(dados.value, valores)) {
        window.alert('Adicionado! Digite mais um número ou clique em Concluir')
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
}