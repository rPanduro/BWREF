const usuario = document.querySelector('')

function validarCredenciales(usuario,password){
    const usuarioValido="admin";
    const passwordValido="1234";

    if(usuario === usuarioValido && password === passwordValido){
        return true;
    } else {
        return false;
    }

}

document.getElementById("btn_registrarse").onclick = function(){
    const usuario = document.getElementById("usuario").value;
    const password = documet.getElementById("password").value;

    if(validarCredenciales(usuario,password)) {
        window.location.href = "index.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }

    
}