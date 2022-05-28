
//alert("PREPARENCE PARA EL MEJOR TRABAJO DEL MUNDO")

var consulta = ("#searchTable").DataTable()

$("#inputBusqueda").keyup(function(){
    consulta.search($(this).val()).draw();

    $("header").css({
        "height": "100vh",
        "background":"rgba(0,0,0,0.5)"
    })

    if ($("inputBusqueda").val() == ""){
        $("header").css({
            "height": "auto",
            "background":"none"
        })
        $("search").hide()

    } else{
        $("search").fadeIn("fast");
    }

})










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