const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');
const navbar = document.getElementById('offcanvasNavbar')

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

const actualizarColor = (rojo, verde, azul) => {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
    navbar.style.backgroundColor = colorRGB;
}

inputRojo.addEventListener('change', (e) => {
    rojo = inputRojo.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul);
});

inputVerde.addEventListener('change', (e) => {
    verde = inputVerde.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);
});

inputAzul.addEventListener('change', (e) => {
    azul = inputAzul.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul);
});