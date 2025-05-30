let n = prompt("Ingrese un numero", 0);
let result = [];
for (let i = 2; i <= n; i++) {
  let isPrimo = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrimo = false;
      break;
    }
  }
  if (isPrimo) {
    result.push(i);
  }
}

alert(`estos son los numero primos entre 2 y ${n}: ${result.join(", ")}`);
