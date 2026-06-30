const mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

const mostrarMesesAnio = () => {
    let lista = '<h1 mt-4>Lista de meses</h1>'
    lista += '<ul>';
    for (let i=0; i < mesesAnio.length; i++){
    lista += `<li> ${mesesAnio[i]}</li>`;
    }
    lista += '</ul>';

    console.log(lista)
    pantalla.innerHTML += lista;
}

const pantalla = document.getElementById('screenOut') //Me devuelve un objeto
mostrarMesesAnio();






