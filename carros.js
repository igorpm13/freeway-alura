//Variaveis dos carros
let yCarros = [ 40, 96, 150];
let xCarros = [ 600, 600, 600];
let altCarros = 50;
let largCarros = 40;
let velCarros = [ 2, 3, 2.5];
let inicioCarros = 600;

function invocCarros(){
  for(let i = 0; i < imagemCarros.length; i = i+1){
    image(imagemCarros[i] , xCarros[i] , yCarros[i] , altCarros , largCarros);
  }
}
function movimentoCarros(){
  xCarros[0] -= velCarros[0];

  xCarros[1] -= velCarros[1];
  
  xCarros[2] -= velCarros[2];
  
}
function resetPosCarros(){
  if( xCarros[0] < -50 ){
    xCarros[0] = inicioCarros ;
  }
  if( xCarros[1] < -50 ){
    xCarros[1] = inicioCarros ;
  }
  if( xCarros[2] < -50 ){
    xCarros[2] = inicioCarros ;
  }

}

