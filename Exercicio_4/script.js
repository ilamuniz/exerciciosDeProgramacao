function tabuada() {
    var multiplicador = document.getElementById('multiplicador')
    var resultado = document.getElementById('seltab') 

   if (multiplicador.value == 0) {
       resultado.innerHTML = "Insira um número!"
   } else {
        var n = Number(multiplicador.value)
        resultado.innerHTML = ""

        for (var i = 1; i <= 10; i++) {
        let item = document.createElement('option')
        item.text = `${n} X ${i} = ${n*i}`
        item.value = `resultado${i}`
        resultado.appendChild(item)
        }
   }
}