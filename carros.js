//Variaveis do carro 1
let xCarro1 = 600 ;
let yCarro1 = 40 ;
let altCarro1 = 50 ;
let largCarro1 = 40;
let velCarro1 = 2;
let inicioCarro1 = 600;

//Variaveis do carro 2
let xCarro2 = 600 ;
let yCarro2 = 96 ;
let altCarro2 = 50 ;
let largCarro2 = 40;
let velCarro2 = 3;
let inicioCarro2 = 600;

//Variaveis do carro 3
let xCarro3 = 600 ;
let yCarro3 = 150 ;
let altCarro3 = 50 ;
let largCarro3 = 40;
let velCarro3 = 2.5;
let inicioCarro3 = 600;

function invocCarro1(){
  image(carro1 , xCarro1 , yCarro1 , altCarro1 , largCarro1);
}

function invocCarro2(){
  image(carro2 , xCarro2 , yCarro2 , altCarro2 , largCarro2);
}

function invocCarro3(){
  image(carro3 , xCarro3 , yCarro3 , altCarro3 , largCarro3);
}

function movimentoCarros(){
  xCarro1 -= velCarro1;
  if( xCarro1 < -35 ){
    xCarro1 = inicioCarro1 ;
  }
  xCarro2 -= velCarro2;
  if( xCarro2 < -35 ){
    xCarro2 = inicioCarro2 ;
  }
  xCarro3 -= velCarro3;
  if( xCarro3 < -35 ){
    xCarro3 = inicioCarro3 ;
  }
}

