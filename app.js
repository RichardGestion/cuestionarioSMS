//base de datos local de preguntas
const bd_juego = [
    {
        id:0,
        pregunta:"¿Selecciona la opción que establece la Aplicabilidad del SMS a los Proveedores?",
        op0:"CAPÍTULO A (RAV-5).",
        op1:"CAPÍTULO C (RAV-5).",
        op2:"CAPÍTULO B (RAV-5).",
        correcta:"0"
    },
    {
        id:1,
        pregunta:"¿Selecciona la opción que describe el proceso de Implementación del SMS?",
        op0:"SECCIÓN 5.5 (RAV-5).",
        op1:"SECCIÓN 5.4 (RAV-5).",
        op2:"SECCIÓN 5.3 (RAV-5).",
        correcta:"2"
    },
    {
        id:2,
        pregunta:"¿Selecciona la opción que describe la Aprobación del SMS?",
        op0:"SECCIÓN 5.5 (RAV-5).",
        op1:"SECCIÓN 5.4 (RAV-5).",
        op2:"SECCIÓN 5.3 (RAV-5).",
        correcta:"1"
    },
    {
        id:3,
        pregunta:"¿Selecciona la opción que establece las actividades y requisitos de Implementación del SMS?",
        op0:"CAPÍTULO A (RAV-5).",
        op1:"CAPÍTULO C (RAV-5).",
        op2:"CAPÍTULO B (RAV-5).",
        correcta:"1"
    },
    {
        id:4,
        pregunta:"¿Selecciona la opción que establece la categorías y criterios de Implementación del SMS?",
        op0:"APÉNDICE A (RAV-5).",
        op1:"APÉNDICE C (RAV-5).",
        op2:"APÉNDICE B (RAV-5).",
        correcta:"0"
    },
    {
        id:5,
        pregunta:"¿Cuantas Etapas tiene el proceso de Implementación del SMS?",
        op0:"Tres Etapas (RAV-5).",
        op1:"Cinco Etapas (RAV-5).",
        op2:"Cuatro Etapas (RAV-5).",
        correcta:"2"
    },
    {
        id:6,
        pregunta:"¿Selecciona la opción que establece los requisitos para el desarrollo del Plan de Implementación del SMS?",
        op0:"APÉNDICE A (RAV-5).",
        op1:"APÉNDICE C (RAV-5).",
        op2:"APÉNDICE B (RAV-5).",
        correcta:"2"
    },
    {
        id:7,
        pregunta:"¿Selecciona la opción que establece los requisitos para el desarrollo del Manual de SMS?",
        op0:"APÉNDICE A (RAV-5).",
        op1:"APÉNDICE C (RAV-5).",
        op2:"APÉNDICE B (RAV-5).",
        correcta:"1"
    },
    {
        id:8,
        pregunta:"¿Para alcanzar la aprobación seleccione los lapsos que dispone los explotadores aéreos a partir de la presentación del Plan de Implementación?",
        op0:"Tres Años (RAV-5).",
        op1:"Dos Años (RAV-5).",
        op2:"Cuatro Años (RAV-5).",
        correcta:"1"
    },
    {
        id:9,
        pregunta:"¿Cuantos capitulos posee la estructura del Manual de SMS?",
        op0:"Diez (RAV-5).",
        op1:"Doce (RAV-5).",
        op2:"Trece (RAV-5).",
        correcta:"1"
    },
    {
        id:10,
        pregunta:"¿Selecciona la opción que establece los requisitos para el desarrollo del Plan de Respuesta Ante la Emergencia?",
        op0:"APÉNDICE F (RAV-5).",
        op1:"APÉNDICE D (RAV-5).",
        op2:"APÉNDICE E (RAV-5).",
        correcta:"1"

    },
    {
        id:11,
        pregunta:"¿Selecciona la opción que establece los requisitos para el desarrollo del programa de Instrucción de Seguridad Operacional?",
        op0:"APÉNDICE F (RAV-5).",
        op1:"APÉNDICE G (RAV-5).",
        op2:"APÉNDICE E (RAV-5).",
        correcta:"2"
    }
]

//para guardar las respuestas elegidas
let respuestas = [];
//cantidad correctas
let cantiCorrectas = 0;
//pregunta acutal que debe ser cargada
let numPregunta = 0;

//Cargo una pregunta del JSON
function cargarPreguntas(){
    //tomo la pregunta actual de la bd
    const pregunta = bd_juego[numPregunta];

    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = pregunta.id;
    const h2 = document.createElement("h2");
    h2.textContent = pregunta.id + 1 + " - " + pregunta.pregunta;
    contenedor.appendChild(h2);
    const opciones = document.createElement("div");

    //vamos a crear los tres labels
    //Lo vamos a hacer mediante una funciòn.
    // A dicha función le envio el numero de label y la opcion
    // el texto, de dicho label
    const label1 = crearLabel("0",pregunta.op0);
    const label2 = crearLabel("1",pregunta.op1);
    const label3 = crearLabel("2",pregunta.op2);

    //agrego los labels al contendor de las opciones
    opciones.appendChild(label1);
    opciones.appendChild(label2);
    opciones.appendChild(label3);

    //agrego las opciones al contenedor principal
    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}

//creo la funciòn que que retornará el label con todo su contenido
function crearLabel(num, txtOpcion){
    const label = document.createElement("label");
    label.id = "l" + numPregunta + num;
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.name = "p" + numPregunta;
    input.setAttribute("onclick", "seleccionar(" + numPregunta+","+num+")");
    const span = document.createElement("span");
    const correccion = document.createElement("span");
    correccion.id = "p" + numPregunta + num;
    span.textContent = txtOpcion;
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(correccion);

    return label;
}

//Mediante un for cargo todas las preguntas del JSON
for(i=0;i < bd_juego.length;i++){
    cargarPreguntas();
    //actualizo el numero de pregunta actual
    numPregunta++;
}

//Función que carga la opción elegida en el arreglo respuestas.
function seleccionar(pos, opElegida){
    respuestas[pos] = opElegida;
}

//botón corregir
let corregir = document.getElementById("corregir");
corregir.onclick = function(){
    //recorro el arreglo que tiene las respuestas y comparo
    for(i=0;i<bd_juego.length;i++){
        //cargo la pregunta
        const pregunta = bd_juego[i];
        if(pregunta.correcta == respuestas[i]){ //respuesta correcta
            cantiCorrectas++;
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta correcta";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }else{//no acerto
            let id = "p" + i + respuestas[i];
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta incorrecta";
            document.getElementById(id).innerHTML = "&#x2715;";
            document.getElementById(id).className = "no-acierto";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }
    }

    //desabilitamos todos los inputs
    let inputs = document.getElementsByTagName("input");
    for(i=0;i<inputs.length;i++){
        inputs[i].disabled = true;
    }

    //hacemos un scroll hacia arriba
    window.scrollTo(0,0);
    //colocamos la cantidad que acertoy las que no acertó
    h2 = document.createElement("h2");
    h2.className = "resultado";
    h2.textContent = cantiCorrectas + " CORRECTAS - " + (10-cantiCorrectas) + " INCORRECTAS";
    document.getElementById("juego").appendChild(h2);
}