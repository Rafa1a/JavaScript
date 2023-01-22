

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var footer = document.querySelector('body footer')
    var h1 = document.querySelector('body h1')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <= 12){
        //Bom dia
        img.src = 'imagens/manha.jpg'
        document.body.style.background = 'rgb(246, 248, 145)'
        footer.style.background = 'rgb(199, 199, 127)'
        h1.style.color = 'black'
        
    }else if (hora >= 12 && hora < 18){
        // boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = 'rgb(224, 158, 71)'
        
        footer.style.background = 'rgb(175, 120, 48)'
    }else {
        //boa jnoite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = 'rgb(62, 98, 216)'
        footer.style.background = 'rgb(58, 80, 153)'
        
    }
}