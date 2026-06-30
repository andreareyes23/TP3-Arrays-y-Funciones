const mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

const pantalla = document.getElementById('screenOut') //Me devuelve un objeto
pantalla.innerHTML += '<h1 mt-3>Lista de meses</h1>'

let lista ='<ul class=”list-group”>'
for (let i=0; i < mesesAnio.length; i++){
lista += `<li class=”lis.group.item”> ${ mesesAnio [i] } </li>`
}
lista += '</ul>'

console.log(lista)
pantalla.innerHTML += lista


