//ator
let yAtriz = 350;
let xAtriz = 85;
let colisao = false
let meusPontos = 0

function mostraAtor(){
    image(imagemDoAtor, xAtriz, yAtriz, 45, 45);
  }

  function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtriz -= 3
    }
    if (keyIsDown(DOWN_ARROW)){
      if (podeSeMover()){
        yAtriz += 3
      }
    }
  }

  function verificaColisao(){
    // collideRectRect(x, y, width, height, x2, y2, width2, height2 )
    for (let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectRect(xAtriz, yAtriz, 35, 35, xCarros[i], yCarros[i], 50, 30)
      if (colisao){
        voltaParaPosicalInicial();
        somDaColisao.play();
        if (pontosMaiorQueZero()){
          meusPontos -= 1;
        }
      }
    }
  }

  function voltaParaPosicalInicial(){
    yAtriz = 350;
  }

  function incluiPontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255,240,60));
    text(meusPontos, width / 5, 27);
  }

  function marcaPonto(){
    if (yAtriz < 12) {
      meusPontos += 1;
      voltaParaPosicalInicial();
      somDoPonto.play();
    }
  }

  function pontosMaiorQueZero() {
    return meusPontos > 0;
  }

  function podeSeMover(){
    return yAtriz < 350;
  }