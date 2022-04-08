operacao = prompt("que tipo de operacão deseja fazer ? , Digite “+”, “-”, “*” ou “/” ");
primeiroNum = Number(prompt("Digite o primeiro número"));
segundoNum = Number(prompt("Digite o segundo número"));

// lógica
if (operacao == "+"){
    resultado = primeiroNum + segundoNum 
}else if(operacao == "-"){
    resultado = primeiroNum - segundoNum
}else if(operacao == "/"){
    resultado = primeiroNum / segundoNum
} else {
    resultado = "operação invalida"
}

// Exibição
if (resultado == "operação invalida" ) {
    alert(" Operação inválida tente novamente ");
}else {
    alert(" O resultado do seu cálculo é " + resultado);
}

