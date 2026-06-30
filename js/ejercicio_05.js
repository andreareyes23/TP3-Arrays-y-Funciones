const typeText = (userString) => {
    switch (userString) {
        case "": 
            alert("No se ingresaron caracteres");
            break;
        case (userString.toUpperCase()): 
            alert("El texto contiene solo mayúsculas");
            break;
        case (userString.toLowerCase()): 
            alert("El texto contiene solo minúsculas");
            break;
        default:
            alert("El texto contiene tanto mayúsculas como minúsculas");
            break;
    }
};

const userString = prompt("Ingresa un texto:");
typeText(userString);
