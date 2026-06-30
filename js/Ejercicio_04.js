const parImpar = (numberData) => {
    const result = numberData%2;
    if (result===0) {
        alert("El número ingresado es par");
    } else {
        alert("El número ingresado es impar");
    }
}

const numberData = parseInt(prompt("Ingrese un valor entero"));

if (!isNaN(numberData)){
    parImpar(numberData);
} else{
    alert("Error!! Debes ingresar un número entero");
}
