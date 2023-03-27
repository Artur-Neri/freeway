let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

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
  image(imagemDoAtor, 100, 350, 45, 45);
  image(imagemCarro, 450, 45, 50, 30)

}
