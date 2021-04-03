function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = 'Agora são ' + hora + ' horas.'

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'Icons/icon-manha.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 16) {
        // BOA TARDE!
        img.src = 'Icons/icon-tarde.png'
        document.body.style.background = '#b9846f'
    } else if (hora >= 16 && hora <= 18) {
        //BOM FIM DE TARDE!
        img.src = 'Icons/icon-por-do-sol.png'
        document.body.style.background = '#6A5ACD'
    } else {
        // BOA NOITE!
        img.src = 'Icons/icon-noite.png'
        document.body.style.background = '#515154'
    }
}
