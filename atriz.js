//ator
let yAtriz = 350;
let xAtriz = 100;

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