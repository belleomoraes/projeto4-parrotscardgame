//definir numero de cartas
let numCartas;
while (numCartas < 4 || numCartas > 14 || numCartas % 2 !== 0) {
  numCartas = Number(prompt("Com quantas cartas você quer jogar?"));
}

//criando um baralho aleatório
let gifs = [
  `imagens/bobrossparrot.gif`,
  `imagens/explodyparrot.gif`,
  `imagens/fiestaparrot.gif`,
  `imagens/metalparrot.gif`,
  `imagens/revertitparrot.gif`,
  `imagens/unicornparrot.gif`,
  `imagens/tripletsparrot.gif`,
];

let jogos = [];
let i = 0;

gifs.sort(comparador);
for (let i = 0; jogos.length < numCartas; i++) {
    jogos.sort(comparador);
    jogos.push(`<div class="cards" onclick="virar(this)">
    <div class="back escondido"><img src="${gifs[i]}"/></div>
    <div class="front"><img src="imagens/front.png"/></div>
    </div>`, `<div class="cards" onclick="virar(this)">
    <div class="back escondido"><img src="${gifs[i]}"/></div>
    <div class="front"><img src="imagens/front.png"/></div>
    </div>`);
    jogos.sort(comparador);
  }
  console.log(jogos)

//mostrar baralho
function mostrarBaralho() {
  let contador = 0;
  while (contador < jogos.length) {
  const distribuicao = document.querySelector(".distribuicao");
  distribuicao.innerHTML += jogos[contador]; 
  contador++
  }
}

mostrarBaralho();

function comparador() { 
	return Math.random() - 0.5; 
}


//clicar na carta
let primeiraCarta;
let segundaCarta;
let clicks = 0;
let cartasEscolhidas = []
function virar(carta) {
  let frente = carta.querySelector(".front");
  let verso = carta.querySelector(".back");
  let foiClicado = frente.classList.contains("escondido");
  if (foiClicado) {
    frente.classList.remove("escondido");
    verso.classList.add("escondido");
  } else {
    frente.classList.add("escondido");
    verso.classList.remove("escondido");
    clicks ++;
  }
  carta.querySelector(".front").classList.add("escondido");
  carta.querySelector(".back").classList.remove("escondido");
  
  cartasEscolhidas.push(carta);

  if (cartasEscolhidas.length >= 3) {
  carta.querySelector(".front").classList.remove("escondido");
  carta.querySelector(".back").classList.add("escondido");
  }
}