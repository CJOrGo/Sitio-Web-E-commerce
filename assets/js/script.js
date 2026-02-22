// Esperar a que el DOM cargue
document.addEventListener('DOMContentLoaded', function() {
    const elementoMensaje = document.getElementById('mensaje-bienvenida');
    
    // Obtener fecha y hora actual
    const ahora = new Date();
    const hora = ahora.getHours();
    let saludo;

    if (hora < 12) {
        saludo = "¡Buenos días! Descubre el arte de hoy";
    } else if (hora < 19) {
        saludo = "¡Buenas tardes! Bienvenido a nuestra comunidad";
    } else {
        saludo = "¡Buenas noches! Gracias por visitarnos";
    }

    // Insertar el mensaje dinámico en el HTML
    elementoMensaje.innerText = `${saludo}. Hoy es: ${ahora.toLocaleDateString()}`;
});