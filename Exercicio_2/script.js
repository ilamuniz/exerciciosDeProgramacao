function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.getElementById('textano')
    var res = document.getElementById('res')

    if (form_ano.value.length == 0 || Number(form_ano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var form_sex = document.getElementsByName('radsex')
        var idade = ano - Number(form_ano.value)

        //Teste
        //res.innerHTML = 'Idade: ' + idade 

        var genero = ""

        //var img = document.createElement('img')
        //img.setAttribute('id', 'foto')
        var img = document.getElementById('foto')

        if (form_sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                //Criança
                //img.setAttribute('src', 'menino.png')
                img.src = 'img/menino.png'
            } else if (idade < 21) {
                //Jovem
                img.src = 'img/rapaz.png'
            } else if (idade < 60) {
                //Adulto
                img.src = 'img/homem.png'
            } else {
                //Idoso
                img.src = 'img/idoso.png'
            }
        } else if (form_sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                //Criança
                img.src = 'img/menina.png'
            } else if (idade < 21) {
                //Jovem
                img.src = 'img/moca.png'
            } else if (idade < 60) {
                //Adulto
                img.src = 'img/mulher.png'
            } else {
                //Idoso
                img.src = 'img/idosa.png'
            }
        }
        
        res.style.textAlign = 'center'
        if (idade <= 12) {
            if (genero == 'Homem') {
                res.innerHTML = "Menino com " + idade + " anos."
            } else {
                res.innerHTML = "Menina com " + idade + " anos."
            }            
        } else {
            res.innerHTML = genero + " com " + idade + " anos."
        }
        res.appendChild(img)
    }
}