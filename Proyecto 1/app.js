const boton = document.getElementById('boton-color');
const color = document.getElementById('color');
const navbar = document.getElementById('offcanvasNavbar')

const generarColorHexAleatorio = () => {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i+= 1) {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[indiceAleatorio];
    }

    return colorHex
}

boton.addEventListener('click', () => {
    let colorAleatorio = generarColorHexAleatorio();
    color.textContent = colorAleatorio;
    document.body.style.backgroundColor = colorAleatorio;
    navbar.style.backgroundColor = colorAleatorio
})