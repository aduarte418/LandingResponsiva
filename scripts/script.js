const boton = document.getElementById('btn-theme');
boton.addEventListener('click', () => {
    // toggle() añade la clase si no está, o la quita si ya está presente
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        boton.textContent = 'Cambiar a modo claro';
    } else {
        boton.textContent = 'Cambiar a modo oscuro';
    }
});