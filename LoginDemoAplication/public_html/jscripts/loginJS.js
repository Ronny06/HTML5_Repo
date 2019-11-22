$(document).ready(function (){
    $("#login").click(function(){
        var user = $("#user").val();
        var clave = $("#clave").val();
        //
                if(user =='' || clave ==''){
                    alert("Por favor complete los campos.....!!!!!!")
                    return false;
                }
                if(clave.length >5){
                     alert("Tamaña maximo 5 caracteres")
                    return false;
                }
            });
    });



