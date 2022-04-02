// Função para jogar os números digitados na tela:
function inserir(num) {
    let numero = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = numero + num;
}


// Função para limpar a tela:
function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

// Função para apagar os números individualmente:
function voltar() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

// Função para fazer os cálculos:
function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;

    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}