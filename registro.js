document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener datos del formulario
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Verificar si el usuario ya está registrado
        const storedUser = localStorage.getItem(email);

        if (storedUser) {
            alert("Este correo electrónico ya está registrado. Por favor, inicia sesión.");
            window.location.href = "login.html";
        } else {
            // Crear un objeto de usuario
            const user = {
                email: email,
                password: password,
            };

            // Almacenar el usuario en localStorage (como JSON)
            localStorage.setItem(email, JSON.stringify(user));

            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            window.location.href = "login.html";
        }
    });
});
