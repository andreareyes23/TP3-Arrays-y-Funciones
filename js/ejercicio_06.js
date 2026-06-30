

const heightRectangle = parseInt(prompt("Ingrese el valor de la altura del rectángulo"));
const baseRectangle = parseInt(prompt("Ingrese el valor de la base del rectángulo"));

const perimeter = (heightRectangle, baseRectangle) => {
     const perimeterResult = 2*(heightRectangle+baseRectangle);
     alert("El perímetro del rectángulo es: "+ perimeterResult);
}

if (!isNaN(heightRectangle) && !isNaN(baseRectangle)){
    perimeter(heightRectangle, baseRectangle);
} else{
    alert("Error!! Debes ingresar un número");
}