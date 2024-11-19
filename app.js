document.getElementById('form-registro').addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const genero = document.querySelector('input[name="genero"]:checked');
    const imagen = document.getElementById('imagen').files[0];

    if (!nombre || !apellido || !telefono || !email || !direccion || !edad || !imagen || !genero) {
        alert('Por favor completa todos los campos.');
        return;
    }

    const imgPermitidas = ['image/jpeg', 'image/png'];
    if (!imgPermitidas.includes(imagen.type)) {
        alert('Por favor, suba una imagen en formato JPG o PNG.');
    return;
    }

alert('Formulario enviado correctamente.');
});