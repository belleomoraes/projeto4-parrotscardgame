//definir numero de cartas
let numCartas;
while (numCartas < 4 || numCartas > 14 || numCartas % 2 !== 0) {
  numCartas = Number(prompt("Com quantas cartas você quer jogar?"));
}

let gifs = [
  `imagens/bobrossparrot.gif`,
  `imagens/explodyparrot.gif`,
  `imagens/fiestaparrot.gif`,
  `imagens/metalparrot.gif`,
  `imagens/revertitparrot.gif`,
  `imagens/unicornparrot.gif`,
  `imagens/tripletsparrot.gif`,
];
//criando um baralho aleatório
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

let cardsClicados = [];
function virar(elemento) {
  let cardVirado = document.querySelector(".front .escondido");
  if (cardVirado !== null) {
    let cardVirado2 = cardVirado.querySelector(".back");
    cardVirado.classList.remove("escondido");
    cardVirado2.classList.add("escondido");
  }
  elemento.querySelector(".front").classList.add("escondido");
  elemento.querySelector(".back").classList.remove("escondido");
  cardsClicados.push(elemento);
  //isso tem que acontecer ate cardsClicados.length === 2
}
