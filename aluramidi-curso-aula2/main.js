function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listadeTeclas = document.querySelectorAll('.tecla');
let contator = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++){ 
    const tecla = listadeTeclas[Contador] 
    const instrumento = tecla.classlist[1];
    const idaudio = `#som_ ${instrumento}`;
       console.log(instrumento); 
       tecla.onclick = function (){
         tocaSom(idaudio) 
       }
contador = contador + 1;
1 = function(evento){
    if(evento.code == 'enter')
listadeTeclas.classlit.add('ativa')
}
tecla.onKeyup = function(){
    tecla.classlist.remove('ativa')}

