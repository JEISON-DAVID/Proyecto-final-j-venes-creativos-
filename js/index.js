// Espera a que se cargue completamente el contenido de la página
document.addEventListener("DOMContentLoaded", function () {
    // Obtiene una referencia al botón de "Calcular"
    const calcularBtn = document.querySelector(".information-txt .btn-1");

    // Agrega un controlador de eventos al botón de "Calcular"
    calcularBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Previene que se recargue la página

        // Obtiene los valores de peso y altura ingresados por el usuario
        const peso = parseFloat(document.querySelector(".information-txt input[placeholder='peso']").value);
        const altura = parseFloat(document.querySelector(".information-txt input[placeholder='altura']").value);

        // Realiza el cálculo de calorías (puedes personalizar esta fórmula)
        const calorias = calcularCalorias(peso, altura);

        // Muestra el resultado en una ventana emergente (alerta)
        alert(`Debes consumir aproximadamente ${calorias} calorías al día.`);
    });

    // Función para calcular las calorías (personaliza esta fórmula según tus necesidades)
    function calcularCalorias(peso, altura) {
        // Aquí puedes personalizar la fórmula para calcular las calorías según tus requisitos
        // Esta es una fórmula de ejemplo que puedes modificar
        const calorias = peso * altura * 10;

        return calorias.toFixed(2); // Redondear el resultado a 2 decimales
    }
});
