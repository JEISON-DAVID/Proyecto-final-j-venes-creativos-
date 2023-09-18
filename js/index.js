let currentProduct = 0; // Índice del producto actual
const products = document.querySelectorAll('.producto'); // Selecciona todos los productos

function showProduct(index) {
    products.forEach((product, i) => {
        if (i === index) {
            product.style.display = 'block'; // Muestra el producto actual
        } else {
            product.style.display = 'none'; // Oculta los otros productos
        }
    });
}

function nextProduct() {
    currentProduct++;
    if (currentProduct >= products.length) {
        currentProduct = 0; // Vuelve al primer producto si llega al final
    }
    showProduct(currentProduct);
}

// Establece un intervalo para cambiar automáticamente de producto cada 5 segundos
setInterval(nextProduct, 1000);

// Muestra el primer producto al cargar la página
showProduct(currentProduct);
