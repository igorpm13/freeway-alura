//Variaveis de imagem
let fundo;
let ator;
let carro1;
let carro2;
let carro3;

// variaveis de sons

let somTrilha;
let somColisao;
let somPonto;

function preload(){
  fundo = loadImage("imagens/estrada.png");  
  ator = loadImage("imagens/ator-1.png");
  carro1 = loadImage("imagens/carro-1.png");
  carro2 = loadImage("imagens/carro-2.png");
  carro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [carro1 ,carro2 , carro3,carro1 ,carro2 , carro3];

  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}
