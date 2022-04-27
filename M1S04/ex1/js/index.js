const idade = Number(prompt('Qual sua idade'))

if (idade <=15){
    console.log('Você é jovem')
} else if (idade >=16 && idade <=64){
    console.log('Você é adulto')
} else if (idade >= 65) {
    console.log('Você é idoso')
} else {
    alert('Erro, tente novamente')
}