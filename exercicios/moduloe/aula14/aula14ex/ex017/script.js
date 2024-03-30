function gerar() {
    var num = window.document.querySelector('#txtnum')
    //var res = window.document.getElementById('res')
    var res = window.document.querySelector('#res') // Para tipo id usar somente #

    if (num.value.length == 0) {
        window.alert('Digite um número')
    } else {
        var n = Number(num.value)
        res.innerHTML = '' // limpa a tela antes de mostrar outra tabuada
        for (var i = 1; i <= 10; i++) {
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${n * i}`
            item.value = `res ${i}`
            res.appendChild(item)
        }
    }
    if (num.value.length == 0) {
    } else {
        resdiv.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} / ${c} = ${n / c}`
            item.value = `resdiv ${c}`
            resdiv.appendChild(item)
        }
    }
}