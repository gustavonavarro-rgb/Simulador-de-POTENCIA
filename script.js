//==============================
// EXPLORADOR DE POTENCIAS
//==============================

let base = 2;

let exponente = 2;

function actualizarValores(){

document.getElementById("baseActual").innerHTML=base;

document.getElementById("exponenteActual").innerHTML=exponente;

}

function potenciaTexto(base, exponente){

    return "<span class='baseTexto'>" +
            base +
            "</span><sup class='exponenteTexto'>" +
            exponente +
            "</sup>";

}

//----------------------------------------------------
// LECTURA DE LA POTENCIA
//----------------------------------------------------

function leerPotencia(base, exponente){

    const nombres = [
        "",
        "uno",
        "dos",
        "tres",
        "cuatro",
        "cinco",
        "seis",
        "siete",
        "ocho",
        "nueve",
        "diez",
        "once",
        "doce",
        "trece",
        "catorce",
        "quince"
    ];

    let nombreBase = nombres[base];

    switch(exponente){

        case 0:
            return "Se lee: " + nombreBase + " elevado a cero.";

        case 1:
            return "Se lee: " + nombreBase + " elevado a la primera.";

        case 2:
            return "Se lee: " + nombreBase + " al cuadrado.";

        case 3:
            return "Se lee: " + nombreBase + " al cubo.";

        case 4:
            return "Se lee: " + nombreBase + " a la cuarta.";

        case 5:
            return "Se lee: " + nombreBase + " a la quinta.";

        case 6:
            return "Se lee: " + nombreBase + " a la sexta.";

        case 7:
            return "Se lee: " + nombreBase + " a la séptima.";

        case 8:
            return "Se lee: " + nombreBase + " a la octava.";

        case 9:
            return "Se lee: " + nombreBase + " a la novena.";

        case 10:
            return "Se lee: " + nombreBase + " a la décima.";

        default:
            return "";
    }

}
//----------------------------------------------------
// CREA LOS BOTONES DE LA BASE
//----------------------------------------------------

function crearBotonesBase(){

    const contenedor = document.getElementById("botonesBase");

    contenedor.innerHTML="";

    for(let i=1;i<=15;i++){

        let boton=document.createElement("button");

        boton.className="botonBase";

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

       boton.className="botonExponente";

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

    document.getElementById("lecturaPotencia").innerHTML =

        leerPotencia(base,exponente);

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