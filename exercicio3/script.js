
let minhasComidasString = ['nutella', 'salgado', 'lasanha', 'pão de queijo', 'morango']
let comidasPrefUser = [] // Array pra armazenar o ranking de comidas do usuário

const nome = prompt("Digite o seu nome")


console.log(`Ranking das minhas comidas`)

//Impressão do meu ranking
for (let i = 0; i < minhasComidasString.length; i++) {

    console.log(`${i+1} - ${minhasComidasString[i]}`)//Ranking minhas comidas
    
}

console.log(`Ranking das comidas - ${nome} `)

//Loop para preencher o array
for (let i = 0; i < 5; i++) {
    comidasPrefUser[i] = prompt(`Digite a sua ${i+1} comida favorita`)//Pedindo pro usuário digitar as comidas

}

//Loop para impressão do ranking do usuário
for (let i = 0; i < comidasPrefUser.length; i++) {

    console.log(`${i+1} - ${comidasPrefUser[i]}`)//Ranking comidas usuário

}

