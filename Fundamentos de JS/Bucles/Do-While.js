let number = 0;
do {
  number = prompt("Introduzca un numero mayor que 100");
  console.log(number);
} while (number !== null && number !== "" && +number <= 100);
