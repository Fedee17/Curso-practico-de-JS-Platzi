obj = {
    Nombre: 'Fede',
    Apellido: 'Armando',
    Edad: 20
}



function mostrarObj(obj) {

    const arr = Object.value(obj);

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    
}