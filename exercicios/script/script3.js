var botao = window.document.getElementById('botao')

botao.addEventListener('click', contar)

function contar(){
    var ini = window.document.querySelector('input#inicio')
    var fim = window.document.querySelector('input#fim')
    var pass = window.document.querySelector('input#passo')
    var res = window.document.getElementById('res')
    
    if(Number(ini.value) <= 0){
        window.alert('escolha um numero para o INICIO maior que 0')
        res.innerHTML = `Impossivel Contar INICIO Incorreto`
    } else if(Number(fim.value) <= 0 ){
        window.alert('escolha um numero para o FIM maior que 0')
        res.innerHTML = `Impossivel Contar FIM Incorreto`
    } else if (Number(pass.value) <= 0){
        window.alert('escolha um PASSO maior que 0')
        res.innerHTML = `Impossivel Contar PASSO Incorreto`
    } else {
        res.innerHTML = 'Contando :  <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if(i < f){
            if(p > f){
                window.alert('PASSO maior que o FIM')
                res.innerHTML = `Impossivel Contar PASSO Incorreto`
            }else {
                for(let c = i ; c <= f ; c += p){
                    res.innerHTML += `${c} \u{1f449} `
                }
            }
        } else{
            if(p > i){
                window.alert('PASSO maior que o INICIO')
                res.innerHTML = `Impossivel Contar PASSO Incorreto`
            }else{
                for(let c = i; c >= f; c -= p){
                    res.innerHTML += `${c} \u{1f449} `
                }
            }
            
        } res.innerHTML += `\u{1F3C1}`
   
    }
    
}