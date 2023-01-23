let botao = document.querySelector('input#adi')
botao.addEventListener('click', adicionar)
let botaof = document.querySelector('input#fin') 
botaof.addEventListener('click', finalizar)
let num = document.querySelector('input#num')
let list = document.querySelector('select#list')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n)>=1 && Number(n)<=100){
        return true
    } else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    let item = document.createElement('option')
      

    if( isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        
        item.text = `Valor ${num.value} adicionado`
        
        list.appendChild(item)
        res.innerHTML = ''
        
    } else {
        window.alert('Valor inválido ou já cadastrado na lista.')
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0 ){
        window.alert('Sem dados para trabalhar adicone valores')

    } else {
        valores.sort((a, b) => a-b)
        let tot = valores.length 
        menor = valores[0]
        maior = valores[tot-1]
        soma = 0
        
        
        for(let pos in valores){
            soma+=valores[pos]
            
        }
        media = soma/tot
        res.innerHTML = ``
        res.innerHTML +=`<p> Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML +=`<p> A soma de todos os números são</p>`
        res.innerHTML += `<p> O maior valor é ${maior}</p>`
        res.innerHTML += `<p> O menor Valor é ${menor}</p>`
        res.innerHTML += `<p>Soma é ${soma}</p>`
        res.innerHTML +=`<p> Média é ${media}</p>`
    }
}