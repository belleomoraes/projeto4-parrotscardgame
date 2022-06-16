let numCartas;
while (numCartas < 4 || numCartas > 14 || numCartas % 2 !== 0) {
  numCartas = Number(prompt("Com quantas cartas você quer jogar?"));
}

let jogos = `<div class="jogo">
<div class="cards" onclick="virar(this)">
<div class="front"><img src="imagens/front.png"/></div>
</div>`;

let contador = 0;

let gifs = [
`imagens/bobrossparrot.gif`,
`imagens/explodyparrot.gif`,
`imagens/fiestaparrot.gif`,
`imagens/metalparrot.gif`,
`imagens/revertitparrot.gif`,
`imagens/unicornparrot.gif`,
`imagens/tripletsparrot.gif`
];

const distribuicao = document.querySelector(".distribuicao");
while (contador < numCartas) {
    distribuicao.innerHTML += jogos;
  contador++;
}

function virar(elemento) {
    let imagemback = `
    <div><img src="${gifs[Math.ceil(Math.random()*6)]}"/></div>
    `
    document.querySelector(".front").classList.add("escondido");
    document.querySelector(".cards").innerHTML = imagemback;
}




