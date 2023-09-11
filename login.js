document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener datos del formulario
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Verificar si el usuario está registrado
        const storedUser = localStorage.getItem(email);

        if (storedUser) {
            const user = JSON.parse(storedUser);

            // Verificar la contraseña
            if (user.password === password) {
                alert(`Inicio de sesión exitoso. Bienvenido, ${email}!`);
                window.location.href = "inicio.html"; // Redirigir a la página de inicio
            } else {
                alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
            }
        } else {
            alert("No se encontró un usuario con este correo electrónico. Por favor, regístrate primero.");
        }
    });
});
