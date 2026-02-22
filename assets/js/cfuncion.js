document.addEventListener('DOMContentLoaded', () => {
    const tablaBody = document.getElementById('items-carrito');
    const totalDisplay = document.getElementById('total-monto');
    const btnFinalizar = document.querySelector('.btn-success');

    // FUNCIÓN PARA DIBUJAR EL CARRITO
    function renderizarCarrito() {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        
        if (!tablaBody) return;
        tablaBody.innerHTML = '';
        let totalGeneral = 0;

        // Si no hay productos, mostrar mensaje
        if (cartItems.length === 0) {
            tablaBody.innerHTML = '<tr><td colspan="6" class="text-center">Tu carrito está vacío.</td></tr>';
            totalDisplay.textContent = "0.00";
            return;
        }

        // Crear las filas de la tabla con los datos de localStorage
        cartItems.forEach((prod, index) => {
            const subtotal = prod.precio * prod.cantidad;
            totalGeneral += subtotal;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${prod.img}" width="60" class="rounded shadow-sm"></td>
                <td>${prod.nombre}</td>
                <td>$${prod.precio.toFixed(2)}</td>
                <td>
                    <input type="number" class="form-control input-cantidad" 
                           value="${prod.cantidad}" min="1" style="width: 80px;"
                           data-index="${index}">
                </td>
                <td>$${subtotal.toFixed(2)}</td>
                <td>
                    <button class="btn btn-danger btn-sm btn-eliminar" data-index="${index}">
                        Eliminar
                    </button>
                </td>
            `;
            tablaBody.appendChild(row);
        });

        totalDisplay.textContent = totalGeneral.toFixed(2);
    }

    // GESTIÓN DE EVENTOS (ELIMINAR Y CAMBIAR CANTIDAD)
    if (tablaBody) {
        tablaBody.addEventListener('click', (e) => {
            // Lógica para Eliminar un producto individual
            if (e.target.classList.contains('btn-eliminar')) {
                let cartItems = JSON.parse(localStorage.getItem('cartItems'));
                const index = e.target.getAttribute('data-index');
                
                if(confirm(`¿Deseas quitar "${cartItems[index].nombre}" del carrito?`)) {
                    cartItems.splice(index, 1); // Quitar del array
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    location.reload(); // Recargar para actualizar tabla y contador del header
                }
            }
        });

        tablaBody.addEventListener('change', (e) => {
            // Lógica para actualizar cantidades
            if (e.target.classList.contains('input-cantidad')) {
                let cartItems = JSON.parse(localStorage.getItem('cartItems'));
                const index = e.target.getAttribute('data-index');
                const nuevaCantidad = parseInt(e.target.value);
                
                if (nuevaCantidad >= 1) {
                    cartItems[index].cantidad = nuevaCantidad;
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    renderizarCarrito();
                    location.reload(); // Recargar para actualizar el contador del header
                }
            }
        });
    }

    // LÓGICA PARA FINALIZAR COMPRA
    if (btnFinalizar) {
        btnFinalizar.addEventListener('click', () => {
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            if (cartItems.length > 0) {
                alert("¡Gracias por tu compra! Tus tesoros artesanales de Alba están en camino.");
                localStorage.removeItem('cartItems'); // Limpiar el carrito
                window.location.href = 'index.html'; // Redirigir al inicio
            } else {
                alert("El carrito está vacío. ¡Agrega algunas artesanías primero!");
            }
        });
    }

    // LÓGICA PARA VACIAR TODO EL CARRITO
    // Se define en el objeto window para que el atributo onclick="vaciarCarrito()" del HTML lo encuentre
    window.vaciarCarrito = function() {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        if (cartItems.length === 0) {
            alert("El carrito ya está vacío.");
            return;
        }

        if(confirm("¿Estás seguro de que deseas vaciar toda tu selección?")) {
            localStorage.removeItem('cartItems');
            location.reload(); // Refresca la vista y el contador
        }
    };

    // Carga inicial de la tabla
    renderizarCarrito();
});