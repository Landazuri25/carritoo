function iniciar() {
    var correo = document.getElementById('correo').value;
    var contraseña = document.getElementById('contraseña').value;
    let cliente = JSON.parse(localStorage.getItem('cliente'));
    cliente.forEach(listacliente => {
        for (var i=1;i<cliente.length+1;i++){
            if (listacliente.correo != correo){
                alert("Cuenta no registrada");
            }
            //comparacion de datos ingresados con el localstorage
            else if (listacliente.correo == correo && listacliente.contraseña == contraseña){
                alert("Bienvenido,gracias por visitarnos");
                location.href = 'index.html';
            }
            else {
                alert("La contraseña incorrecta, ingrese nuevamente");
            }
        }
    });

}