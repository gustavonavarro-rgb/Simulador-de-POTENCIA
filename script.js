//==============================
// EXPLORADOR DE POTENCIAS
//==============================

let base = 2;

let exponente = 2;

function actualizarValores(){

document.getElementById("baseActual").innerHTML=base;

document.getElementById("exponenteActual").innerHTML=exponente;

}

function potenciaTexto(base,exponente){

let superIndice=["⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹","¹⁰"];

return base + superIndice[exponente];

}


//----------------------------------------------------
// CREA LOS BOTONES DE LA BASE
//----------------------------------------------------

function crearBotonesBase(){

    const contenedor = document.getElementById("botonesBase");

    contenedor.innerHTML="";

    for(let i=1;i<=15;i++){

        let boton=document.createElement("button");

        boton.className="botonNumero";

        boton.innerHTML=i;

        boton.onclick=function(){

            base=i;

            actualizarPantalla();

        };

        contenedor.appendChild(boton);

    }

}



//----------------------------------------------------
// CREA LOS BOTONES DEL EXPONENTE
//----------------------------------------------------

function crearBotonesExponente(){

    const contenedor=document.getElementById("botonesExponente");

    contenedor.innerHTML="";

    for(let i=0;i<=10;i++){

        let boton=document.createElement("button");

        boton.className="botonNumero";

        boton.innerHTML=i;

        boton.onclick=function(){

            exponente=i;

            actualizarPantalla();

        };

        contenedor.appendChild(boton);

    }

}

//----------------------------------------------------
// CALCULA LA POTENCIA
//----------------------------------------------------

function calcularPotencia(){

    return Math.pow(base,exponente);

}

//----------------------------------------------------
// DESARROLLO
//----------------------------------------------------

function construirDesarrollo(){

    if(exponente==0){

        return "1";

    }

    if(exponente==1){

        return base;

    }

    let texto="";

    for(let i=1;i<=exponente;i++){

        texto+=base;

        if(i<exponente){

            texto+=" × ";

        }

    }

    return texto;

}

//----------------------------------------------------
// ACTUALIZA TODA LA PANTALLA
//----------------------------------------------------

function actualizarPantalla(){

    actualizarValores();

    document.getElementById("potencia").innerHTML=

        potenciaTexto(base,exponente);

    let desarrollo=construirDesarrollo();

    document.getElementById("desarrollo").innerHTML=

        desarrollo;

    document.getElementById("resultado").innerHTML=

        desarrollo + " = " + calcularPotencia();

}

//----------------------------------------------------
// INICIO
//----------------------------------------------------

crearBotonesBase();

crearBotonesExponente();

actualizarPantalla();