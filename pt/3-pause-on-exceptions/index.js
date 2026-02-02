const mostlyPrimes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 117, 127, 131, 137, 139, 149,
  151, 157, 163, 167, 173,
];

// Verifica se um número é primo.
function isPrime(num){
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}


for (let maybePrime of mostlyPrimes) {
  if (!isPrime(maybePrime)) {
    throw new Error(
      `Encontrou um número que não é primo! Esse número é a sua resposta.`
    );
  }
}
