let listanumeroSorteado = [];
let NumeroGerados = 500;
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1;

function ExibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function mensageminicial() {
    ExibirTextoNaTela("h1", "o jogo dos numeros secretos");
    ExibirTextoNaTela("p", "tente adivinhar um numero entre 1 e 100");
}

mensageminicial();

// função para verificar o chute
function verificarChute() { 
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) { 
        ExibirTextoNaTela ("h1","voce acertou")
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentavias = `voce é bom msm em, conseguiu com ${tentativas} ${palavraTentativas}`;
        ExibirTextoNaTela("p", mensagemTentavias )
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else { 
        if (chute > numeroSecreto) {
            ExibirTextoNaTela("p", "o numero é menor");
        } else if (chute < numeroSecreto) { 
            ExibirTextoNaTela("p","o numero é maior");
        }
        tentativas++;
        limparcampo();
        } 
        
    }

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * NumeroGerados +1);
  let numerototaldeEscolhas = listanumeroSorteado.length;
  if( numerototaldeEscolhas == 500) { 
    listanumeroSorteado = [];
}
  if (listanumeroSorteado.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else { 
    listanumeroSorteado.push(numeroEscolhido)
    console.log(numeroEscolhido)
    return numeroEscolhido;
  }
}

function limparcampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas =1 ;
    mensageminicial()
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
