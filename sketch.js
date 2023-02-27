
function setup() {
  createCanvas(500, 400);
  }

function draw() {
  background(fundo);
  invocCarros();
  invocAtor();
  movimentoCarros();
  movimentoAtor();
  resetPosCarros();
  verificaColisao();
  mostraPontos();
  marcaPontos();
  
}





