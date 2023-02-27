//Variaveis dos carros
let yCarros = [ 40, 96, 150];
let xCarros = [ 600, 600, 600];
let altCarros = 50;
let largCarros = 40;
let velCarros = [ 2, 3, 2.5];
let inicioCarros = 600;

function invocCarros(){
  for(let i = 0; i < imagemCarros.length; i += +1){
    image(imagemCarros[i] , xCarros[i] , yCarros[i] , altCarros , largCarros);
  }
}
function movimentoCarros(){
  for(let i = 0; i < imagemCarros.length; i += +1){
  xCarros[i] -= velCarros[i]; 
}
}
function resetPosCarros(){
  for(let i = 0; i < imagemCarros.length; i += +1)
  if(passouDaTela(xCarros[i])){
    xCarros[i] = inicioCarros ;
  }
}

function passouDaTela(xCarro){
  return xCarro < -50;
}