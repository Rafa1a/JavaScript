

var botao = window.document.getElementById('botao')
botao.addEventListener('click', verificar)
function verificar (){

    var res = window.document.getElementById('res')
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('idade')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique o ano e tende novamente')
    }else{
        var fsex = document.getElementsByName('sex')
        var idade= ano - Number(fano.value)
        var genero = ''
        //img config

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex [0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 11){
                //crianca
                img.setAttribute('src', 'imagens/kid_homem.jpg')
                
            } else if (idade < 22){
                // jovem
                img.setAttribute('src', "imagens/jovem_homem.jpg")
                
            }else if (idade < 50 ){
                //meia idade
                img.setAttribute('src', 'imagens/meiaidade_homem.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/velho_homem.jpg')
            }

        }else if(fsex [1].checked){
            genero = 'Mulher'
            
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'imagens/kid_mulher.jpg')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'imagens/jovem_mulher.jpg')
            } else if (idade < 50 ){
                //meia idade
                img.setAttribute('src', 'imagens/meiaidade_mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', "imagens/velha_mulher.jpg")
            }
            
        }
        
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    }

}