const colorblack1 = document.querySelector(".black");
const colorblue1 = document.querySelector('.blue');
const colorgreen1 = document.querySelector('.green');
const colorred1 = document.querySelector('.red');
const colloralls = document.querySelectorAll('.color');






// criando meus quadros , logica parecida com o exercicio de jogo da velha apresentada na monitoria.
function framepixels (){
    const tagmain = document.querySelector("#pixel-board");
    for (let i = 0; i < 25; i += 1) {
      let createframe = document.createElement('div');
      tagmain.appendChild(createframe);
      createframe.className = 'pixel';
       
    }
}
framepixels();

window.onload = function(){
        
    colorblack1.classList.add('selected');
    colorblue1.classList.remove('selected');
    colorred1.classList.remove('selected');
    colorgreen1.classList.remove('selected');
}

// parte da logica de remover funçoes foi tirada do site https://stackoverflow.com/questions/22270664/how-to-remove-a-class-from-elements-in-pure-javascript
colorred1.addEventListener('click',function() {
  for(let i = 0 ; i < colloralls.length ; i +=1 ) {
      colloralls[i].classList.remove('selected');
 }
      colorred1.classList.add('selected');   
});

colorblack1.addEventListener('click',function(){
  for(let i = 0 ; i < colloralls.length ; i +=1 ) {
      colloralls[i].classList.remove('selected');
 }
      colorblack1.classList.add('selected');   
});

colorblue1.addEventListener('click',function(){
  for(let i = 0 ; i < colloralls.length ; i +=1 ) {
      colloralls[i].classList.remove('selected');
 }
      colorblue1.classList.add('selected');  
       
 });

  colorgreen1.addEventListener('click',function(){
  for(let i = 0 ; i < colloralls.length ; i +=1 ) {
      colloralls[i].classList.remove('selected');
 }
      colorgreen1.classList.add('selected');  
  });

  
function printcor(){
  const pixelalls = document.querySelectorAll('.pixel');
  
  
  for(let i = 0; i< pixelalls.length; i += 1) {
    pixelalls[i].addEventListener('click',function(e){
      const pegarselect = document.querySelector('.selected');
      
      e.target.style.backgroundColor = pegarselect.style.backgroundColor;
     
    });
  }
}
printcor();

function createbackgroundcolor(){

let pegarcolor= document.querySelectorAll('.color');

pegarcolor[0].style.backgroundColor ="black";
pegarcolor[1].style.backgroundColor ="red";
pegarcolor[2].style.backgroundColor ="blue";
pegarcolor[3].style.backgroundColor ="green";
}
createbackgroundcolor();

