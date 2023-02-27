//Variaveis dos carros
let yCarros = [ 40, 96, 150 ,210 ,270 ,318];
let xCarros = [ 600, 600, 600 ,600 ,600 ,600];
let altCarros = 50;
let largCarros = 35;
let velCarros = [ 2, 3, 2.5,5 ,3.3 ,2.3];
let inicioCarros = 600;

function invocCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i] , xCarros[i] , yCarros[i] , altCarros , largCarros);
  }
}
function movimentoCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velCarros[i]; 
}
}
function resetPosCarros(){
  for(let i = 0; i < imagemCarros.length; i++)
  if(passouDaTela(xCarros[i])){
    xCarros[i] = inicioCarros ;
  }
}

function passouDaTela(xCarro){
  return xCarro < -50;
}