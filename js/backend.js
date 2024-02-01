let mostrarDados = "";
var conteudo = "";               // Referência do textarea
var conteudoTextarea;            // Variável para salvar o conteudo do textarea

function criotografarTexto() {
    alterarElemento();
    conteudo = document.getElementById("textarea_conteudo");
    conteudoTextarea = conteudo.value;
    console.log(conteudoTextarea);

    deletarElementoInicial();

    // validando texto
    if (validadorTexto(conteudoTextarea)) {
        mostrarDados = document.getElementById("mostrar");
        mostrarDados.innerHTML = codificador(conteudoTextarea);
        conteudo.value = "";
    } else {
        alert(" Apenas letras minúsculas e sem acento!");
    }
}

function deletarElementoInicial () {
    const element = document.getElementById("img_ilustracao");
    if (element != null){
        element.remove();
    }
}


function descriotografarTexto () {
    conteudo = document.getElementById("textarea_conteudo");
    conteudoTextarea = conteudo.value;
    mostrarDados = document.getElementById("mostrar");
    mostrarDados.innerHTML = decodifica(conteudoTextarea);
    conteudo.value = "";
    console.log(conteudoTextarea);
}

// Verificar se tem texto no elemento de exibir informações
function alterarElemento () {
    document.getElementById("ocultar__elementos").style.display = "flex";
}


function copiarTexto () {
    navigator.clipboard.writeText(mostrarDados.innerHTML).then(() => {
        alert("Copiado para área de transferência!");
    })
}


// %%%%%%%%%%%%%%%  Validador de texto  %%%%%%%%%%%%%%%

function validadorTexto (texto) {
    if(/[A-Z-À-Ú-à-ú]/.test(texto)) {
        return false;
    } else {
        return true;
    }
}


// %%%%%%%%%%%%%%%  Criptografia  %%%%%%%%%%%%%%%

function codificador(texto) {
    var caracteres = texto.split("");

    caracteres.forEach(function(item, i) {
        if(item == "a") {
            caracteres[i] = "#4";

        } else if(item == "e") {
            caracteres[i] = "%@";

        } else if(item == "i") {
            caracteres[i] = "@@";

        } else if(item == "o") {
            caracteres[i] = "%6¨";

        } else if(item == "u") {
            caracteres[i] = ")%";
        }
    })
    return caracteres.join("");
}

function decodifica(texto) {
    var codigo = [["a", "#4"], ["e", "%@"], ["i", "@@"], ["o", "%6¨"], ["u", ")%"]];
    texto = texto;

    for(var i = 0; i < codigo.length; i++) {
        if(texto.includes(codigo[i][1])) {
            texto = texto.replaceAll(codigo[i][1], codigo[i][0]);
        }
    }
    return texto;
}