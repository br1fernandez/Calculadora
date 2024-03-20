const display = document.querySelector('#pantalla-display');
const botones = document.querySelectorAll('button');

botones.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'borrar') {
            display.innerText = '';
        } else if (item.id == 'atras') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && item.id == 'igual') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && item.id == 'igual') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000)
        } else {
            display.innerText += item.id;
        }
    }
})

const btnCambiarTema = document.querySelector('.cambiar-tema');
const calculadora = document.querySelector('.calculadora');
const iconoCambiarTema = document.querySelector('.cambiar-icono');
let oscuro = true;
btnCambiarTema.onclick = () => {
    calculadora.classList.toggle('oscura');
    btnCambiarTema.classList.toggle('activo');
    oscuro = !oscuro;
}

document.addEventListener('keydown', (event) => {
    const teclaPresionada = event.key;
    const esNumeroUOperador = /[0-9\+\-\*\/]/.test(teclaPresionada);

    if (esNumeroUOperador) {
        display.innerText += teclaPresionada;
    } else if ( teclaPresionada === 'Delete') {
        display.innerText = '';
    } else if (teclaPresionada === 'Backspace'){
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
    } else if (teclaPresionada === 'Enter') {
        if (display.innerText != '') {
            display.innerText = eval(display.innerText);
        } else {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        }
    }
});
