import cipher from './cipher.js';

const botoningresar = document.getElementById('ingresar');
botoningresar.addEventListener('click', () => {
    let ticket = document.getElementById('boleta').value;
    switch (ticket) {
        case '12345' :
            document.getElementById('entrada').style.display='none';
            document.getElementById('logo1').style.display='none';
            document.getElementById('panelbotones').style.display='block';
            document.getElementById('fondo1').style.display='none';

            break;
        default:
            alert('No es un usuario registrado')
            break;
    }
    
})

const entrarcifrar = document.getElementById('cifrar');
entrarcifrar.addEventListener('click', () => {
            document.getElementById('panelbotones').style.display='none';
            document.getElementById('panelcifrado').style.display='block';
            document.getElementById('codigocifrar').value = '';
            document.getElementById('espacioscifrar').value = '';
})

const code = document.getElementById('cifrartxt');
code.addEventListener('click', () => {
            document.getElementById('vercifrado').style.display = 'block';
            document.getElementById('panelcifrado').style.display='none';
    let codigo = document.getElementById('codigocifrar').value.toUpperCase();
    let numEspacios = document.getElementById('espacioscifrar').value;
    let resultado1 = cipher.encode(numEspacios, codigo);
    document.getElementById('txtcifrado').innerHTML = resultado1;
    });


const botonreiniciar1 = document.getElementById('reiniciar1');
botonreiniciar1.addEventListener('click', () => {
            document.getElementById('entrada').style.display = 'block';
            document.getElementById('logo1').style.display = 'block';
            document.getElementById('vercifrado').style.display = 'none';
            document.getElementById('fondo1').style.display = 'block';
            document.getElementById('boleta').value = '';
});

const entrardescifrar = document.getElementById('descifrar');
entrardescifrar.addEventListener('click', () => {
            document.getElementById('panelbotones').style.display='none';
            document.getElementById('paneldescifrado').style.display='block';
            document.getElementById('codigodescifrar').value = '';
            document.getElementById('espaciosdescifrar').value = '';
});

const decode = document.getElementById('descifrartxt');
decode.addEventListener('click', () => {
            document.getElementById('verdescifrado').style.display='block';
            document.getElementById('paneldescifrado').style.display= 'none';
    let codigo2 = document.getElementById('codigodescifrar').value.toUpperCase();
    let numEspaciosDes = document.getElementById('espaciosdescifrar').value;
    let resultado2 = cipher.decode(numEspaciosDes, codigo2);
    document.getElementById('txtdescifrado').innerHTML = resultado2;
    })


const botonreiniciar2 = document.getElementById('reiniciar2');
botonreiniciar2.addEventListener('click', () => {
            document.getElementById('entrada').style.display = 'block';
            document.getElementById('logo1').style.display = 'block';
            document.getElementById('verdescifrado').style.display = 'none';
            document.getElementById('fondo1').style.display = 'block';
            document.getElementById('boleta').value = '';

})
