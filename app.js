let numeroSecreto = 0;
let intentos = 1;
let listaNumeros = [];

function asignarTextoAElemento(elemento, texto){
    elemento.textContent = texto;
}

function generarNumeroAleatorio(){
    let number = Math.floor(Math.random() * 10) + 1;
    console.log(number);
    if(!listaNumeros.includes(number)){
        listaNumeros.push(number);
        console.log(listaNumeros);
        return number;
    }else{
       return generarNumeroAleatorio();
    }
}

numeroSecreto = generarNumeroAleatorio();

function limpiarCampo(){
    document.getElementById('userNumber').value = '';
}

function intentoDelUsuario(){
    let userNumber = parseInt(document.getElementById('userNumber').value);

    if (userNumber === numeroSecreto){
        asignarTextoAElemento(parrafo, `Felicidades, adivinaste el numero secreto en ${intentos} ${(intentos > 1) ? 'intentos' : 'intento'} !!!`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(userNumber > numeroSecreto) {
            asignarTextoAElemento(parrafo, 'El numero secreto es MENOR al numero ingresado');
        }
        else {
            asignarTextoAElemento(parrafo, 'El numero secreto es MAYOR al numero ingresado');                       
        }
        intentos++; 
        limpiarCampo();
    } 
   
}

function resetGame(){
    limpiarCampo();
    numeroSecreto = generarNumeroAleatorio();
    listaNumeros = [];
    asignarTextoAElemento(parrafo, 'Indica un numero del 1 al 10');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

asignarTextoAElemento(titulo, 'Numero Secreto');
asignarTextoAElemento(parrafo, 'Indica un numero del 1 al 10');

