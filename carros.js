//Variaveis dos carros
let yCarros = [ 40, 96, 150];
let xCarros = [ 600, 600, 600];
let altCarros = 50;
let largCarros = 40;
let velCarros = [ 2, 3, 2.5];
let inicioCarros = 600;

function invocCarro1(){
  image(carro1 , xCarros[0] , yCarros[0] , altCarros , largCarros);
}

function invocCarro2(){
  image(carro2 , xCarros[1] , yCarros[1] , altCarros , largCarros);
}

function invocCarro3(){
  image(carro3 , xCarros[2] , yCarros[2] , altCarros , largCarros);
}

function movimentoCarros(){
  xCarros[0] -= velCarros[0];

  xCarros[1] -= velCarros[1];
  
  xCarros[2] -= velCarros[2];
  
}
function resetPosCarros(){
  if( xCarros < -50 ){
    xCarros = inicioCarros ;
  }
  if( xCarros < -50 ){
    xCarros = inicioCarros ;
  }
  if( xCarros < -50 ){
    xCarros = inicioCarros ;
  }

}

