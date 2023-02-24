//Variaveis do Ator
let xAtor = 100;
let yAtor = 366;
let altAtor = 30;
let largAtor = 30;
 
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
