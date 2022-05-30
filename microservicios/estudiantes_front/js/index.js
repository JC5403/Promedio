//alert("PREPARENCE PARA EL MEJOR TRABAJO DEL MUNDO");

//------------------------------

let estudiante = {
  actividad: "",
  nota: 1.0,
};

let listaEstudiantes = [{ actividad: "Actividad 1", nota: 4.9 },{actividad: "Actividad 2 ", nota:4.3}];


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
    html += "   <td>" + estudiante.nota+ "</td>";
  });
  html += "   <h1> Promedio:4.6</h1>";
  let tabla = document.getElementById("listaEstudiantes");
  let tbody = tabla.getElementsByTagName("tbody")[0];
  tbody.innerHTML = html;
}

mostrarDatosLista();



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


document.getElementById("cancelarBoton").addEventListener("click", function () {
  ocultarFormulario(true);
});

//--------------------------------------------

$(document).ready(function () {
  let urlEstudaintes = "http://localhost:8080/estudiante";
  // $.ajax({
  //   url: urlEstudaintes,
  //   type: "GET",
  //   success: function (response) {
  //     console.log(response.data);
  //   },
  // });

  // $.ajax({
  //   url: urlEstudaintes,
  //   type: "POST",
  //   data: JSON.stringify({
  //     codigo: 123456,
  //     nombres: "juan",
  //     apellidos: "camacho",
  //   }),
  //   success: function (response) {
  //     console.log("nuevo registro", response.data);
  //   },
  //   error: function (response) {
  //     console.error("eror en servicio", response);
  //   },
  // });

  // $.ajax({
  //   url: urlEstudaintes + "/2",
  //   type: "PUT",
  //   data: JSON.stringify({
  //     codigo: 4444,
  //     nombres: "juan",
  //     apellidos: "camaBICHO",
  //   }),
  //   success: function (response) {
  //     console.log("Registro actualizado", response.data);
  //   },
  //   error: function (response) {
  //     console.error("eror en servicio", response);
  //   },
  // });

  // $.ajax({
  //   url: urlEstudaintes + "/9",
  //   type: "GET",
  //   success: function (response) {
  //     console.log("Registro:", response.data);
  //   },
  //   error: function (response) {
  //     console.error("eror en servicio", response);
  //   },
  // });

  // $.ajax({
  //   url: urlEstudaintes + "/9",
  //   type: "GET",
  //   success: function (response) {
  //     console.log(response.data);
  //   },
  //   error: function (response) {
  //     console.error("eror en servicio", response);
  //   },
  // });

  document.getElementById("buscarBtn").addEventListener("click", function () {
    let codigo = document.getElementById("inputBusqueda").value;
    $.ajax({
      url: urlEstudaintes + "/" + codigo,
      type: "GET",
      success: function (response) {
        document.getElementById("nombre").value = response.data [0].nombre;
        },
      error: function (response) {
        console.error("eror en servicio", response);
      },
    });
   
  });
});
