let imagemDaEstrada;
let imagemDoAtor;


function preload(){
  imagemDoAtor = loadImage('imagens/ator1.png')
  imagemDaEstrada = loadImage('imagens/estrada.png')
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  image(imagemDoAtor, 100, 350)
}
