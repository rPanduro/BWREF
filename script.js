if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
}


function getUsers() {
    return JSON.parse(localStorage.getItem("users"));
}


function saveUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById("loginMessage").innerText = "¡Inicio de sesión exitoso!";
        document.getElementById("loginMessage").style.color = "green";
        window.location.href = "index.html";

    } else {
        document.getElementById("loginMessage").innerText = "Usuario o contraseña incorrectos.";
        document.getElementById("loginMessage").style.color = "red";
    }
});


document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    const users = getUsers();
    const userExists = users.some(u => u.username === username);

    if (userExists) {
        document.getElementById("registerMessage").innerText = "El usuario ya existe.";
        document.getElementById("registerMessage").style.color = "red";
    } else {
        saveUser({ username, password });
        document.getElementById("registerMessage").innerText = "Usuario registrado exitosamente.";
        document.getElementById("registerMessage").style.color = "green";
    }
});
