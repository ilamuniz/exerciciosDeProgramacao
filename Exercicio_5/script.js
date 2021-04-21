let dados = document.querySelector('input#numini');
let lista = document.querySelector('select#listafim');
let resultado = document.querySelector('div#resultado');
let valores = [];

function iNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function calcular() {
    if (iNumero(dados.value) && !inLista(dados.value, valores)) {
        valores.push(Number(dados.value));
        let item = document.createElement('option');
        item.text = `Valor ${dados.value} adicionado.`;
        lista.appendChild(item);
        resultado.innerHTML = "";
    } else {
        window.alert('Valor inválido ou já encontrado na lista!');
    }
    dados.value = "";
    dados.focus();
}

function concluir() {
    if (valores.length == 0) {
        alert("Adicione os valores antes de concluir!");
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior) {
                maior = valores[pos];
            }
            if (valores[pos] < menor) {
                menor = valores[pos];
            }
        }
        media = soma / total;

        resultado.innerHTML = "";
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        resultado.innerHTML += `<p>O maior valor cadastrado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor cadastrado foi ${menor}.</p>`
        resultado.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores cadastrados é ${media}.</p>`
    }
}