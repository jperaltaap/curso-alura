// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];
let indiceAleatorio = 0;


function agregarAmigo(){
    // capturamos el valor ingresado en el input
    let nombre = document.getElementById('amigo').value;

    // verificamos que el input no este vacio o que no se de tipo numerico 
    if(nombre == ''){
        alert('no ingresate ningun nombre');
    }else if(!isNaN(nombre)){
        alert('no esta permitido ingresar numeros solo texto');
    }else{
        verificarNombre(nombre);
        limpiarCaja();
    } 
    document.getElementById('amigo').focus();
    return;
}



function verificarNombre(nombre){
    if(listaNombres.includes(nombre)){
        alert('el nombre de amigo ya esta registrado');
        limpiarCaja();
    }else{
        listaNombres.push(nombre);
        crearVistaLista(listaNombres);
        console.log(listaNombres);
    }
    return;
}

//crear la lista de amigos
function crearVistaLista(listaNombres){
    let nuevaLista ='';
    for (let index = 0; index < listaNombres.length; index++) {
        nuevaLista = nuevaLista + '<li>'+listaNombres[index]+'</li>'
    }
    asignarTextElemento('listaAmigos', `${nuevaLista}`);
    console.log(nuevaLista);
    return;
}

//funcion para moficiar el texto de elementos HTML
function asignarTextElemento(idElemento, texto){
    let elementoHTML = document.getElementById(idElemento);
    elementoHTML.innerHTML = texto;
    return;
}

// limpiar caja de texto
function limpiarCaja() {
    document.querySelector('#amigo').value ='';
    return;
}

function sortearAmigo(){
    if(listaNombres.length <= 1){
        alert('debe registrar al menos dos nombre para realizar el sorteo');
    }else{
        indiceAleatorio = generarIndiceAleatorio(listaNombres);
        asignarTextElemento('resultado',`<li>Felicidades!!! tu amigo secreto es : ${listaNombres[indiceAleatorio]}</li>`)
    }
    return;
}
function generarIndiceAleatorio(listaNombres) { 
    let numeroGenerado = Math.floor(Math.random()*listaNombres.length);
    return numeroGenerado;
}