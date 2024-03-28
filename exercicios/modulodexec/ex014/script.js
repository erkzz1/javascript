function carregar() {
    //var msg = window.document.getElementById('msg')
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    //var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //var hora = 15
    msg.innerHTML = `Agora são ${hora} hora(s) e ${minuto} minutos(s).`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'manha.webp'
        document.body.style.background = '#dac898'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'tarde.webp'
        document.body.style.background = '#aa7764'
    } else {
        //Boa noite
        img.src = 'noite.webp'
        document.body.style.background = '#0a2b3e'
    }
}



