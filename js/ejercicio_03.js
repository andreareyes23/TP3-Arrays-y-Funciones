const possibleResult = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const rollDice = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let launch = 0;
while (launch <= 50) {
  let result_1 = Math.floor(Math.random() * 6) + 1;
  let result_2 = Math.floor(Math.random() * 6) + 1;
  let lastResult = result_1 + result_2;
  switch (lastResult) {
    case 2:
      rollDice[0] += 1;
      break;
    case 3:
      rollDice[1] += 1;
      break;
    case 4:
      rollDice[2] += 1;
      break;
    case 5:
      rollDice[3] += 1;
      break;
    case 6:
      rollDice[4] += 1;
      break;
    case 7:
      rollDice[5] += 1;
      break;
    case 8:
      rollDice[6] += 1;
      break;
    case 9:
      rollDice[7] += 1;
      break;
    case 10:
      rollDice[8] += 1;
      break;
    case 11:
      rollDice[9] += 1;
      break;
    case 12:
      rollDice[10] += 1;
      break;
    default:
      break;
  }
  launch += 1;
}

let unifiedTable = possibleResult.map((valor, indice) => [valor,rollDice[indice],]);
console.log(unifiedTable);
const screenOut = document.getElementById("screenOut");
let board = "<table class='table table-bordered'><tr><th>Suma</th><th>Apariciones</th></tr>";

unifiedTable.forEach((numrow) => {
  board += `<tr><td>${numrow[0]}</td><td>${numrow[1]}</td></tr>`;
});
board += "</table>";
screenOut.innerHTML = board;

