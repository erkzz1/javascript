function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    //var fano = window.document.getElementById('txtano')
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) // fano.value = valor que esta dentro de fano
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) { // marcou homem aparece genero recebe homem
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-m.webp' )// img.setAttribute seta a imagem diretamente no js em vez do html 
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-m.webp')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-m.webp')
            } else {
                img.setAttribute('src', 'velho-m.webp')
            }

        } else if (fsex[1].checked) { // Marcou Mulher genero recebe mulher
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-f.webp')// img.setAttribute seta a imagem diretamente no js em vez do html 
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-f.webp')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-f.webp')
            } else {
                img.setAttribute('src', 'velho-f.webp')
            }
        }
        res.innerHTML = `O seu gênero é ${genero} com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}