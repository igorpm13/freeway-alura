
function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
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





