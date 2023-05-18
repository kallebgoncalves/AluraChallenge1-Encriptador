const textArea = document.querySelector("#texto-caixa");
const mensagem = document.querySelector("#texto-descpriptografado");
const imgLupa = document.querySelector('.imagem-lupa');
const exibicaoText = document.querySelector('.exibicao-de-texto');

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function esconderMensagemDeNaoEncontrado() {
    imgLupa.style.display = 'none'
    exibicaoText.style.display = 'none'
}

function mostrarMensagemDeNaoEncontrado() {
    imgLupa.style.display = 'block'
    exibicaoText.style.display = 'block'
}

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function btnDesencriptar() {
    const textoDencriptado = desencriptar(textArea.value);
    mensagem.value = textoDencriptado;
    textArea.value = "";
}

function copiarTexto() {
    let texto = document.querySelector("#texto-descpriptografado");
    mensagem.select();
    document.execCommand("copy");
    mensagem.value = "";
    mostrarMensagemDeNaoEncontrado();
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" ,"ines"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat" ]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    esconderMensagemDeNaoEncontrado();
    
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" ,"ines"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat" ]];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    esconderMensagemDeNaoEncontrado();

    return stringDesencriptada;
}

const chk = document.getElementById("chk")

chk.addEventListener("change" , () => {
    document.body.classList.toggle("dark")
})

