function Inserir(elemento){
    document.getElementById("visor").value += elemento
}

function LimparVisor(){
    document.getElementById("visor").value = "";
}

function RaizQuadrada(){
    let numero = document.getElementById("visor").value
    document.getElementById("visor").value = Math.sqrt(numero);
}

function Calcular(){
    let expressao = document.getElementById("visor").value;
    let resultado = eval(expressao);
    document.getElementById("visor").value = resultado;
}

function Apagar(){
    let conteudo = document.getElementById("visor").value;
    document.getElementById("visor").value = conteudo.substring(0, conteudo.length - 1);
}