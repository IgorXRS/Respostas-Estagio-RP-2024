

// Questão 01 --------------------------------------------------------------------------------------

function questao_01() {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    let conteudo = document.getElementById("resultado01");
    if(conteudo.innerHTML.trim() === "") {
        document.getElementById("resultado01").innerHTML = "O valor da soma é: " + SOMA;
        document.getElementById("resultado01").style.background = "yellow";
    }else {
        document.getElementById("resultado01").innerHTML = "";
        document.getElementById("resultado01").style.background = "none";
    }
    
};

// Questão 02 --------------------------------------------------------------------------------------

function questao_02_pertence(numero) {
    let a = 0;
    let b = 1;

    while (b <= numero) {
        if (b === numero) {
            return true
        }

        let c = a;
        a = b;
        b = c + b;
    }
    return false
}

    function questao_02() {
        let conteudo = document.getElementById("resultado02");
        if(conteudo.innerHTML.trim() === "") {
            let numeroInformado = parseInt(document.getElementById("Input03").value);

            if (!isNaN(numeroInformado)) {
                if (questao_02_pertence(numeroInformado)) {
                    document.getElementById("resultado02").innerHTML = numeroInformado + " pertence á sequênciade Fibonacci.";
                    document.getElementById("resultado02").style.background = "yellow";
                } else {
                    document.getElementById("resultado02").innerHTML = numeroInformado + " não pertence á sequência de Fibonacci.";
                    document.getElementById("resultado02").style.background = "yellow";
                }
            } else {
                document.getElementById("resultado02").innerHTML = "Por favor, digite um número válido.";
                document.getElementById("resultado02").style.background = "yellow";
            }
        } else {
            document.getElementById("resultado02").innerHTML = "";
            document.getElementById("resultado02").style.background = "none";
        }
    }


// Questão 03 --------------------------------------------------------------------------------------

function questao_03() {
    let elementosResposta = document.getElementsByClassName("resposta03");
    let arrayElementos = Array.from(elementosResposta);

    arrayElementos.forEach(elemento => {
        if (elemento.style.display === "none" || elemento.style.display === "") {
            elemento.style.display = "flex";
        }else {
            elemento.style.display = "none";
        }
    });
        
}

// Questão 03 --------------------------------------------------------------------------------------


function questao_04() {
    let elementosResposta = document.getElementsByClassName("resposta04");
    let arrayElementos = Array.from(elementosResposta);

    arrayElementos.forEach(elemento => {
        if (elemento.style.display === "none" || elemento.style.display === "") {
            elemento.style.display = "flex";
            elemento.style.background = "yellow";
        }else {
            elemento.style.display = "none";
            elemento.style.background = "none";
        }
    });
        
}