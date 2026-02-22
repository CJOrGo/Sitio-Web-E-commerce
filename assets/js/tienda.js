// Base de datos de productos extraída de 'Raíces Vivas'
const productos = [
    { nombre: "Alebrije de Jaguar", origen: "San Martín Tilcajete, Oax.", precio: 1250, img: "../assets/img/catalogo/alebrije.jpg" },
    { nombre: "Huipil Chiapaneco", origen: "Zinacantán, Chiapas", precio: 890, img: "../assets/img/catalogo/huipil.jpg" },
    { nombre: "Anillo de Esmeralda", origen: "Taxco, Guerrero", precio: 1100, img: "../assets/img/catalogo/anillo.jpg" },
    { nombre: "Árbol de la Vida", origen: "Metepec, Edo. Méx.", precio: 750, img: "../assets/img/catalogo/arbol.png" },
    { nombre: "Cráneo de Barro Negro", origen: "San Bartolo, Oaxaca", precio: 920, img: "../assets/img/catalogo/craneo.png" },
    { nombre: "Catrina de Cerámica", origen: "Capula, Michoacán", precio: 1050, img: "../assets/img/catalogo/catrina.jpg" },
    { nombre: "Plato de Talavera", origen: "Puebla, Puebla", precio: 580, img: "../assets/img/catalogo/plato.jpg" },
    { nombre: "Rebozo de Seda", origen: "Santa María, SLP", precio: 1500, img: "../assets/img/catalogo/rebozo.jpg" },
    { nombre: "Bordado Tenango", origen: "Tenango, Hidalgo", precio: 650, img: "../assets/img/catalogo/bordado.jpg" },
    { nombre: "Guayabera Yucateca", origen: "Mérida, Yucatán", precio: 980, img: "../assets/img/catalogo/guayabera.jpg" },
    { nombre: "Coyote Tallado", origen: "Oaxaca", precio: 1150, img: "../assets/img/catalogo/coyote.jpg" },
    { nombre: "Collar de Ámbar", origen: "Simojovel, Chiapas", precio: 1350, img: "../assets/img/catalogo/collar.jpg" },
    { nombre: "Canasto de Palma", origen: "Mixteca Alta, Oax.", precio: 350, img: "../assets/img/catalogo/canasta.jpg" },
    { nombre: "Sarape de Saltillo", origen: "Saltillo, Coahuila", precio: 1200, img: "../assets/img/catalogo/sarape.png" },
    { nombre: "Molinillo de Madera", origen: "Rayón, Edo. Méx.", precio: 180, img: "../assets/img/catalogo/molinillo.jpg" },
    { nombre: "Huaraches de Piel", origen: "Sahuayo, Michoacán", precio: 450, img: "../assets/img/catalogo/huarache.jpg" },
    { nombre: "Jarrón Bruñido", origen: "Tonalá, Jalisco", precio: 850, img: "../assets/img/catalogo/jarron.jpg" },
    { nombre: "Máscara de Danza", origen: "Guerrero", precio: 1400, img: "../assets/img/catalogo/mascara.jpg" },
    { nombre: "Pulsera Tejida Plata", origen: "Taxco, Guerrero", precio: 1600, img: "../assets/img/catalogo/pulsera.jpg" },
    { nombre: "Morral de Ixtle", origen: "Valle del Mezquital", precio: 250, img: "../assets/img/catalogo/morral.jpg" }
];

document.addEventListener('DOMContentLoaded', () => {
    const contenedorProductos = document.getElementById('contenedor-productos');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    // Función para renderizar productos
    // ... (mantén tu array de productos igual)

    function renderizar(lista) {
        if (!contenedorProductos) return;
        contenedorProductos.innerHTML = '';
        lista.forEach((prod, index) => { // Agregamos el index
            const card = document.createElement('article');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${prod.img}" alt="${prod.nombre}">
                <div class="product-info">
                    <h3>${prod.nombre}</h3>
                    <p class="origin">${prod.origen}</p>
                    <p class="price">$${prod.precio.toFixed(2)}</p>
                    <button class="btn-add-cart" data-index="${index}">Agregar al carrito</button>
                </div>
            `;
            contenedorProductos.appendChild(card);
        });
    }

    // Lógica de búsqueda mejorada
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const termino = searchInput.value.toLowerCase().trim();
            const filtrados = productos.filter(p => 
                p.nombre.toLowerCase().includes(termino) || 
                p.origen.toLowerCase().includes(termino)
            );

            // Insertar el mensaje de resultados antes de renderizar las tarjetas
            contenedorProductos.innerHTML = `
                <div class="col-12 mb-4">
                    <h3 class="text-center">Resultados para la búsqueda de: "${searchInput.value}"</h3>
                </div>
            `;
            
            // Renderizar los productos encontrados
            if (filtrados.length > 0) {
                renderizar(filtrados);
            } else {
                contenedorProductos.innerHTML += `<p class="text-center w-100">No se encontraron tesoros que coincidan con tu búsqueda.</p>`;
            }
        });
    }

    // Carga inicial
    renderizar(productos);
});