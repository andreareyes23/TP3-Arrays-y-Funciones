const numberMultiplication = parseInt(prompt("Ingrese un número entero"));


const calculator = (numberMultiplication) => {
    let calculatorTable = `<h1 class="mt-4">Tabla de multiplicar del ${numberMultiplication}</h1>`
    calculatorTable += '<ul class="list-group">';
    let resultMultiplication = 0;
    for (let i = 1; i <= 10; i++) {
       resultMultiplication = numberMultiplication * i;
       calculatorTable += (`<li class="list-group-item">${i}  *  ${numberMultiplication} = ${resultMultiplication}</li>`);
    }
    calculatorTable += "</ul>";
    screenOut.innerHTML += calculatorTable;
}





const screenOut = document.getElementById("screenOut");

if (!isNaN(numberMultiplication)){
    calculator(numberMultiplication)
} else{
    alert("Error!! Debes ingresar un número");
}
