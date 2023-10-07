function carregar (){
var msg = document.getElementById('msg')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora<12) {
        //imagem manhã
        document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18) {
    // iamgem tarde 
    document.body.style.background = '#b9846f'
} else {
    //imagem noite
    document.body.style.background = '#515154'
} 

}