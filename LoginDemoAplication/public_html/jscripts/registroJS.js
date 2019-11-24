$(document).ready(function(){
    $("#enviar").click(function(){
        var clave =$("#contraseña").val();
        var mes= $("#mes").val();
        var genero= $("#genero").val();
        var telefono= $("#telefono").val();
       if(clave.length <6){
           
           alert("La clave deberia tener minimo 6 caracteres");
           return false;
           
       }
       if(mes ==''){
            alert("Seleccione mes valido.");
            return false;
       }
       if (genero ==''){
            alert("Seleccione genero");
            return false;
       }
       if(telefono.length<8){
            alert("Ingrese de celular número válido")
            return false;
       }
        alert("Validaciones OK")
        
        
        
    });
});