if (localStorage.getItem("cliente") === null) {
    localStorage.setItem("cliente", JSON.stringify([]));
}

function registrarse() {    
if (localStorage.getItem("cliente") === null) {
  localStorage.setItem("cliente", JSON.stringify([]));
}

let cliente = JSON.parse(localStorage.getItem("cliente"));
let correo = document.getElementById('correo').value;  
let contraseña = document.getElementById('contraseña').value;    
let nombre = document.getElementById('nombre').value;    
let apellidos = document.getElementById('apellido').value;    


let listacliente = cliente.find(lista => lista.correo == correo);
if (listacliente === undefined) {
    cliente.push({
        nombre: nombre,
        apellidos: apellidos,
        correo: correo,
        contraseña: contraseña
    });

localStorage.setItem("cliente", JSON.stringify(cliente));

alert("Cuenta creada, Inicie sesion");   
document.getElementById("registrarse").reset();
    }
}