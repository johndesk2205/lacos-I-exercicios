let respostaUser = prompt('Deseja comer mais coxinha? Responda S para "Sim" e N para "Não"').toUpperCase()

let conta = 0
let i = 1
while (respostaUser !== 'N') {

    console.log(`Você comeu ${i} coxinha(s), será adicionado 2,50 na sua conta`)
    i++
    conta = conta + 2.5

    respostaUser = prompt('Deseja comer mais coxinha? Responda S para "Sim" e N para "Não"').toUpperCase()

}

console.log(`O valor total da sua conta foi: R$ ${conta}`)