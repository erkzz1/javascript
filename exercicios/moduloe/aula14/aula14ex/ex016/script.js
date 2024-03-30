function contar() {
    var inicio = window.document.querySelector('input#txtinicio')
    var fim = window.document.querySelector('input#txtfim')
    var passo = window.document.querySelector('input#txtpasso')
    var res = window.document.querySelector('div#res')


    if (passo.value.length == 0 || Number(passo.value) <= 0) {
        window.alert('Passo inválido! Considere Passo começando em 1')
    } else if (fim.value.length == 0 || Number(fim.value <= 0)) {
        window.alert('Fim tem que ser maior que 0')
    } else if (inicio.value.length < 0 || Number(inicio.value < 0)) {
        window.alert('Favor inserir número positivo no inicio')
    } else if (Number(fim.value) < Number(inicio.value)) {
        window.alert('Favor inserir um número de inicio que seja menor que o número de Fim')

    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        for (let c = i; c <= f; c += p)
            res.innerHTML += `\u{1F449} ${c}`// emoji no js \u {numeração do emoji sem U+ dentro das chave} `só funciona entre clases`
    }





}
