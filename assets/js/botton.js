document.addEventListener('DOMContentLoaded', () => {
    console.log("Script cargado correctamente");

    const checkTerminos = document.getElementById('terminos');
    const btnEnviar = document.getElementById('btnEnviar');
    const form = document.getElementById('formRegistro');

    // Lógica para habilitar el botón según el checkbox
    if (checkTerminos && btnEnviar) {
        checkTerminos.addEventListener('change', function() {
            // Si está marcado, disabled es falso. Si no, es verdadero.
            btnEnviar.disabled = !this.checked;
        });
    }

    // Validación al dar clic en enviar
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se refresque
            alert("¡Formulario enviado con éxito!");
        });
    }
});