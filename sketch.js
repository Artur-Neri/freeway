let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
//carro
let xCarro = 600;

//ator
let yAtor = 350;

function preload(){
  imagemDaEstrada = loadImage('imagens/estrada.png');
  imagemDoAtor = loadImage('imagens/atriz-1.png');
  imagemCarro = loadImage('imagens/carro-1.png')
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
}

function mostraAtor(){
  image(imagemDoAtor, 100, yAtor, 45, 45);
}

function mostraCarro(){
  image(imagemCarro, xCarro, 45, 50, 30)
}

function movimentaCarro(){
  xCarro -= 2
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3
  }
}