//ator
let yAtriz = 350;
let xAtriz = 100;
let colisao = false

function mostraAtor(){
    image(imagemDoAtor, xAtriz, yAtriz, 45, 45);
  }

  function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtriz -= 3
    }
    if (keyIsDown(DOWN_ARROW)){
      yAtriz += 3
    }
  }

  function verificaColisao(){
    // collideRectRect(x, y, width, height, x2, y2, width2, height2 )
    for (let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectRect(xAtriz, yAtriz, 45, 45, xCarros[i], yCarros[i], 50, 30)
      if (colisao){
        colidiu()
      }
    }
  }

  function colidiu(){
    yAtriz = 350
  }