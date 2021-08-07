let janela = document.querySelector('.janela');
let menu = document.querySelector('.menu');
let iframe =document.querySelector('.iframe');

function abrirMenu(){
  janela.classList.toggle('abrirMenu');
  menu.classList.toggle('abrirMenu');
}

function abrirIframe(){
  janela.classList.toggle('abrirIframe');
  menu.classList.toggle('abrirIframe');
}
menu.onclick = abrirMenu;
return abrirIframe;





