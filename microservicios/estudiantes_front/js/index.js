
alert("PREPARENCE PARA EL MEJOR TRABAJO DEL MUNDO")

//------------------------------

let estudiante = {
   
    actividad: "",
    nota: 1,
  };
  
  let listaEstudiantes = [
    {  actividad: "Actividad 1", nota: 4.0 },
  ];
  
  let operacion = "";
  let indexSeleccionado = -1;
  
  function ocultarFormulario(mostrar) {
    document.getElementById("formularioContent").hidden = mostrar;
  }
  ocultarFormulario(true);
  
  function mostrarDatosLista() {
    let html = "";
    listaEstudiantes.forEach((estudiante, index) => {
      html += "<tr>";

      html += "   <td>" + estudiante.actividad + "</td>";
      html += "   <td>" + estudiante.nota + "</td>";
      html += "   <td>";
      html +=
        '       <button type="button" onclick="modificarBotonClick(' +
        index +
        ')">Modificar</button>';
      html +=
        '       <button type="button" onclick="eliminarBotonClick(' +
        index +
        ')">Eliminar</button>';
      html += "   </td>";
      html += "</tr>";
    });
    let tabla = document.getElementById("listaEstudiantes");
    let tbody = tabla.getElementsByTagName("tbody")[0];
    tbody.innerHTML = html;
  }
  
  mostrarDatosLista();
  
  document.getElementById("crearBoton").addEventListener("click", function () {
    ocultarFormulario(false);
    document.getElementById("tituloFormulario").innerText =
      "Registrar nueva nota";
    let formulario = document.forms["formulario"];
 
    formulario["actividad"].value = "";
    formulario["nota"].value = "";
    operacion = "crear";
    indexSeleccionado = -1;
  });
  
  document.getElementById("formulario").addEventListener("submit", function (ev) {
    ev.preventDefault();
    let formulario = document.forms["formulario"];
    estudiante = {

      actividad: formulario["actividad"].value,
      nota: formulario["nota"].value,
    };
  
    if (operacion == "crear") {
      listaEstudiantes.push(estudiante);
    } else if (operacion == "modificar") {
      listaEstudiantes[indexSeleccionado] = estudiante;
    }
  
    mostrarDatosLista();
    ocultarFormulario(true);
  });
  
  function modificarBotonClick(index) {
    let data = listaEstudiantes[index];
    let formulario = document.forms["formulario"];
    formulario["actividad"].value = data.actividad;
    formulario["nota"].value = data.nota;
    ocultarFormulario(false);
    document.getElementById("tituloFormulario").innerText = "Modificar registro";
    operacion = "modificar";
    indexSeleccionado = index;
  }
  
  function eliminarBotonClick(index) {
    listaEstudiantes.splice(index, 1);
    mostrarDatosLista();
  }
  
  document.getElementById('cancelarBoton').addEventListener('click', function(){
      ocultarFormulario(true);
  });
  
//--------------------------------------------










$(document).ready(function () {
    let urlEstudaintes = "http://localhost:8080/estudiantes";
    $.ajax({
        url: urlEstudaintes, 
        type: "GET",
        success: function (response) {
            console.log (response.data);
        }
    });


    $.ajax({
        url: urlEstudaintes,
        type: "POST",
        data: JSON.stringify({ 
            codigo: 123456,
            nombres: "juan",
            apellidos: "camacho", 
        }),
        success: function (response){
            console.log("nuevo registro",response.data);
        },
        error: function (response) {
            console.error("eror en servicio" ,response);
        },

    });



$.ajax({
    url: urlEstudaintes + "/2",
    type: "PUT",
    data: JSON.stringify({ 
        codigo: 4444,
        nombres: "juan",
        apellidos: "camaBICHO", 
    }),
    success: function (response){
        console.log("Registro actualizado",response.data);
    },
    error: function (response) {
        console.error("eror en servicio" ,response);
    },

    });



$.ajax({
    url: urlEstudaintes + "/9",
    type: "GET",
    success: function (response){
        console.log("Registro:",response.data);
    },
    error: function (response) {
        console.error("eror en servicio" ,response);
    },
 });


$.ajax({
    url: urlEstudaintes + "/9",
    type: "GET",
    success: function (response){
        console.log(response.data);
    },
    error: function (response) {
        console.error("eror en servicio" ,response);
    },
 });
});