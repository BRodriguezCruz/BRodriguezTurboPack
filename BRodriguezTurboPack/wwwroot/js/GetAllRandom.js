$(document).ready(function () {
    GetAll();
});

function GetAll() {
    $.ajax({
        type: 'GET' ,
        url: 'https://randomuser.me/api/',
        dataType: 'JSON',
        data: '',
        success: function (info) {
            var navegar = info.results[0];
                var fila =
                    "<tr>"
                    + "<td >" + navegar.name.first + " " + navegar.name.last + "</td>"
                    + "<td>" + navegar.email + "</td>"
                    + "<td>" + navegar.location.street.name + " , " + navegar.location.street.number + " , " + navegar.location.city + " , " + navegar.location.state + " , " + navegar.location.country + "</td>"
                    + "<td>" + navegar.gender + "</td>"
                + "<td>" + "<img src= '" + navegar.picture.thumbnail + "'/>" +"</td>"
                    + "</tr>";

                $("#tblUsuario tbody").append(fila);
 
        },
        error: function (info) {
            alert("Ocurrio un error");
        }
    });
};



function Clear() {
    $("#tblUsuarioBody").empty();
}