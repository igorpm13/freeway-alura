//Variaveis do Ator
let xAtor = 100;
let yAtor = 366;
let altAtor = 30;
let largAtor = 30;
let colisao = false;
 
function invocAtor(){
  image(ator, xAtor , yAtor , altAtor , largAtor );
}

function movimentoAtor(){
  if(keyIsDown(UP_ARROW)){
     yAtor -= 3;
     }
  if(keyIsDown(DOWN_ARROW)){
     yAtor +=3;
     }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for(let i = 0; i < imagemCarros.length; i = i+1){
  colisao = collideRectCircle(xCarros[i],yCarros[i],largCarros,altCarros, xAtor, yAtor, 15)
    if(colisao){
      colidiu();
    }
  }
}

function colidiu(){
  yAtor = 366;
}