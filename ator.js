//Variaveis do Ator
let xAtor = 85;
let yAtor = 370;
let altAtor = 30;
let largAtor = 30;
let colisao = false;
//variaveis de placar
let pontos = 0;
let yPontos= 25;
let xPlacar = 75;
let yPlacar = 5;
let largPlacar = 15;
let altPlacar = 30; 

function invocAtor(){
  image(ator, xAtor , yAtor , altAtor , largAtor );
}

function movimentoAtor(){
  if(keyIsDown(UP_ARROW)){
     yAtor -= 3;
     }  
  if(keyIsDown(DOWN_ARROW)){
      if(tocandoBordas()){
      yAtor +=3;
      }
    }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for(let i = 0; i < imagemCarros.length; i++){
  colisao = collideRectCircle(xCarros[i],yCarros[i],largCarros,altCarros, xAtor, yAtor, 4)
    if(colisao){
      resetPosAtor();
      somColisao.play();
      if(pontosMaiorQueZero()){
        pontos -= 1;
      }
    }
  }
}

function mostraPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255,140,0);
  text(pontos, width / 5, yPontos);
}

function marcaPontos(){
  if(yAtor <= 0){
    yAtor = 370;
    pontos += 1;
    somPonto.play();
  }
}
function resetPosAtor(){
  yAtor = 370;
}

function pontosMaiorQueZero(){
  return pontos > 0;
}
  
function tocandoBordas(){
  return yAtor < 370;
}