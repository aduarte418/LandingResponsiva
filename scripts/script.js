const boton = document.getElementById('btn-theme');
boton.addEventListener('click', () => {
    // toggle() añade la clase si no está, o la quita si ya está presente
    document.body.classList.toggle('dark-mode');
});