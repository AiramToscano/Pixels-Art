// constantes universais



// criando meus quadros , logica parecida com o exercicio de jogo da velha apresentada na monitoria.
function framepixels (){
    const tagmain = document.querySelector("#pixel-board");
    for (let i = 0; i < 25; i+= 1) {
      let createframe = document.createElement('div');
      tagmain.appendChild(createframe);
      createframe.className = 'pixel';
    }   
}
framepixels();