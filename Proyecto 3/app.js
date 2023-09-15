

let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

const generarEnteroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const cambiarCita = () => {
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length - 1);
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
    autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();

botonElem.addEventListener('click', cambiarCita);