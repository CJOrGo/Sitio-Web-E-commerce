// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const btnVerMas = document.getElementById('btn-ver-mas');
    const infoAdicional = document.getElementById('info-adicional');

    if (btnVerMas && infoAdicional) {
        btnVerMas.addEventListener('click', () => {
            // Alternar la clase 'hidden' para mostrar/ocultar
            infoAdicional.classList.toggle('hidden');

            // Cambiar el texto del botón según si la info está oculta o no
            if (infoAdicional.classList.contains('hidden')) {
                btnVerMas.textContent = 'Ver más';
            } else {
                btnVerMas.textContent = 'Ver menos';
            }
        });
    }
});