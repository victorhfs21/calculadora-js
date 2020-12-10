function Inserir7(){
    document.getElementById("visor").value += 7;
}

function Inserir8(){
    document.getElementById("visor").value += 8;
}

function Inserir9(){
    document.getElementById("visor").value += 9;
}

function InserirMais(){
    document.getElementById("visor").value += "+";
}

function Inserir4(){
    document.getElementById("visor").value += 4;
}

function Inserir5(){
    document.getElementById("visor").value += 5;
}

function Inserir6(){
    document.getElementById("visor").value += 6;
}

function InserirDivisao(){
    document.getElementById("visor").value += "/";
}

function Inserir0(){
    document.getElementById("visor").value += 0;
}

function Inserir1(){
    document.getElementById("visor").value += 1;
}

function Inserir2(){
    document.getElementById("visor").value += 2;
}

function Inserir3(){
    document.getElementById("visor").value += 3;
}

function InserirPonto(){
    document.getElementById("visor").value += ".";
}

function InserirMultiplicacao(){
    document.getElementById("visor").value += "*";
}

function InserirMenos(){
    document.getElementById("visor").value += "-";
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