document.querySelector("input[class=agregar]").addEventListener("click",function(e){
    e.preventDefault();
 
    var nombre=document.querySelector("input[name=nombre]");
    var nota=document.querySelector("input[name=nota]");
 
    // mostramos un error si no ha recibido el nombre
    if(!nombre.value)
    {
        nombre.classList.add("error");
        return;
    }
    nombre.classList.remove("error");
 
    // mostramos un error si no ha recibido una nota
    if(isNaN(parseInt(nota.value)) || (parseInt(nota.value)<0 && parseInt(nota.value)>10))
    {
        nota.classList.add("error");
        return;
    }
    nota.classList.remove("error");
 
    // añadimos el alumno a la tabla crando el tr, td's y el botón para eliminarlo
    var tr=document.createElement("tr");
 
    var tdNombre=document.createElement("td");
    var txt=document.createTextNode(nombre.value);
    tdNombre.appendChild(txt);
    tdNombre.className="nombre";
 
    var tdNota=document.createElement("td");
    txt=document.createTextNode(nota.value);
    tdNota.appendChild(txt);
    tdNota.className="right";
 
    var tdRemove=document.createElement("td");
    var buttonRemove=document.createElement("input")
    buttonRemove.type="button";
    buttonRemove.value="Eliminar";
    buttonRemove.onclick=function () {
        // elimina la columna
        this.parentElement.parentElement.remove();
 
        // Si no hay ningun alumno, escondemos la tabla
        if(document.getElementById("listado").querySelector("tbody").querySelectorAll("tr").length==0)
        {
            document.getElementById("listado").classList.add("hide");
            document.getElementById("calculos").classList.add("hide");
        }
        calculos();
    };
    tdRemove.appendChild(buttonRemove);
 
    tr.appendChild(tdNombre);
    tr.appendChild(tdNota);
    tr.appendChild(tdRemove);
 
    var tbody=document.getElementById("listado").querySelector("tbody").appendChild(tr);
 
    // eliminamos la clase que tiene oculta la tabla cando no hay ningun alumno
    document.getElementById("listado").classList.remove("hide");
    document.getElementById("calculos").classList.remove("hide");
 
    //limpiamos los valores del input
    nota.value="";
    nombre.value="";
    nombre.focus();
 
    // realizamos los calculos
    calculos();
});
 
/**
 * funcion que realiza los calculos leyendo el contenido de la tabla
 */
function calculos() {
    // Obtenemos un array con los alumnos de la tabla
    var alumnosAgregados=document.getElementById("listado").querySelector("tbody").querySelectorAll("tr");
 
    // guardamos en un array todos los alumnos aprobados, suspendido.
    // promocionados, con mejor nota y con peor nota
    var aprobados=[];
    var suspendidos=[];
    var promocionados=[];
 
    var mejorNotaAlumnos=[];
    var mejorNota=0;
 
    var peorNotaAlumnos=[];
    var peorNota=10;
 
    var mediaNota=0;
 
    // bucle por cada uno de los alumnos
    for (let i=0;i<alumnosAgregados.length;i++)
	{
        let tds=alumnosAgregados[i].getElementsByTagName('td');
 
        // mejor nota
        if(parseFloat(tds[1].innerHTML)>mejorNota) {
            mejorNotaAlumno=[tds[0].innerHTML];
            mejorNota=parseFloat(tds[1].innerHTML);
        }else if(parseFloat(tds[1].innerHTML)==mejorNota){
            mejorNotaAlumno.push(tds[0].innerHTML);
        }
 
        // peor nota
        if(parseFloat(tds[1].innerHTML)<peorNota) {
            peorNotaAlumnos=[tds[0].innerHTML];
            peorNota=parseFloat(tds[1].innerHTML);
        }else if(parseFloat(tds[1].innerHTML)==peorNota){
            peorNotaAlumnos.push(tds[0].innerHTML);
        }
 
        // aprobados y suspendidos
        if(parseFloat(tds[1].innerHTML)>=4) {
            aprobados.push(tds[0].innerHTML);
        }else{
            suspendidos.push(tds[0].innerHTML);
        }
 
        // promocionados
        if(parseFloat(tds[1].innerHTML)>=7) {
            promocionados.push(tds[0].innerHTML);
        }
 
        mediaNota+=parseFloat(tds[1].innerHTML);
    }
 
    // mostramos el resultado
    var result="<div>La mejor nota es de: <span>"+mejorNotaAlumno+" ("+mejorNota+")</span></div>";
    result+="<div>La peor nota es de: <span>"+peorNotaAlumnos+" ("+peorNota+")</span></div>";
    result+="<div>La media es de: <span>"+(mediaNota/alumnosAgregados.length).toFixed(2)+"</span></div>";
    result+="<div>Los aprobados son: <span>"+aprobados+"</span></div>";
    result+="<div>Los suspendidos son: <span>"+suspendidos+"</span></div>";
    result+="<div>Los promocionados son: <span>"+promocionados+"</span></div>";
    result+="<div>El promedio de aprobados es: <span>"+(aprobados.length*100/alumnosAgregados.length).toFixed(2)+"%</span></div>";
    result+="<div>El promedio de promocionados es: <span>"+(promocionados.length*100/alumnosAgregados.length).toFixed(2)+"%</span></div>";
 
    document.getElementById("calculos").innerHTML=result;
 
}
</script>