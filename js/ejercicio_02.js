const cities = [];

const loadVector = () => {
  let answerUser = true;

  while (answerUser) {
    let inputData = prompt("Ingrese una ciudad");
    if (inputData === null) {
      answerUser = false;
    } else {
      cities.push(inputData);
    }
  }
};

const showCities = () => {
  let listCities = '<h2 class="mt-4">Lista de Ciudades</h2>';
  listCities += '<ul class="list-group">';
  for (let i = 0; i < cities.length; i++) {
    listCities += `<li class="list-group-item"> ${cities[i]}</li>`;
  }
  listCities += "</ul>";

  console.log(listCities);
  screenOut.innerHTML += listCities;
};

const traverseVector = () => {
  for (let i = 0; i < cities.length; i++) {
    const lastItem = cities.length - 1;
    switch (i) {
      case 0:
        screenOut.innerHTML += `<p class='mt-4'>Elemento 1er posición: ${cities[i]}</p>`;
        break;
      case 2:
        screenOut.innerHTML += `<p class='mt-4'>Elemento 3ra posición: ${cities[i]}</p>`;
        break;
      case lastItem:
        screenOut.innerHTML += `<p class='mt-4'>Elemento última posición: ${cities[i]}</p>`;
        break;
      default:
        break;
    }
  }
};

loadVector();
const screenOut = document.getElementById("screenOut");
screenOut.innerHTML += '<h1 class= "mt-4">Arreglo de ciudades</h1>'
screenOut.innerHTML += '<h3 class= "mt-4">Punto 1</h3>'
screenOut.innerHTML += `<p class='mt-4'>El arreglo de ciudades tiene: ${cities.length} elementos</p>`;
// showCities();
screenOut.innerHTML += '<h3 class= "mt-4">Punto 2</h3>'
traverseVector();
screenOut.innerHTML += '<h2 class= "mt-4">Punto 3</h2>'
cities.push("Paris");
screenOut.innerHTML += `<p class='mt-4'>La última ciudad del arreglo es: ${cities[cities.length-1]}</p>`;
screenOut.innerHTML += '<h2 class= "mt-4">Punto 4</h2>'
screenOut.innerHTML += `<p class='mt-4'>El segundo elemento del arreglo de ciudades es: ${cities[1]}</p>`;
cities[1] = "Barcelona";
showCities();
