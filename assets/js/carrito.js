document.addEventListener('DOMContentLoaded', () => {
    const cartCounter = document.getElementById('cart-counter');
    // Obtenemos el array de productos o uno vacío si no existe
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Función para actualizar el contador visual
    const updateCounter = () => {
        if (cartCounter) {
            const totalItems = cartItems.reduce((acc, item) => acc + item.cantidad, 0);
            cartCounter.textContent = totalItems;
        }
    };

    updateCounter();

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-add-cart')) {
            const index = e.target.getAttribute('data-index');
            const productoSeleccionado = productos[index]; // 'productos' viene de tienda.js

            // Revisar si ya existe en el carrito
            const existe = cartItems.find(item => item.nombre === productoSeleccionado.nombre);

            if (existe) {
                existe.cantidad++;
            } else {
                cartItems.push({ ...productoSeleccionado, cantidad: 1 });
            }

            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            updateCounter();
            alert(`¡${productoSeleccionado.nombre} agregado con éxito!`);
        }
    });
});