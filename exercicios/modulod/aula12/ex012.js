var agora = new Date();
var hora = agora.getHours(); // getHours pega as horas
var minuto = agora.getMinutes();
console.log(`Agora são exatamente ${hora} hora(s) e ${minuto} minuto(s), tenha um(a)`);

if (hora >= 5 && hora <= 12) {
    console.log('Bom dia!');
} else if (hora > 12 && hora <=18){
    console.log('Boa tarde!');
}else { 
    console.log('Boa Noite!');

}


