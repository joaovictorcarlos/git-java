let phrase = "JavaScript is fun!";

//loop para imprimir cada caractere individualmente no console
console.log("imprimindo cada caractere de 'phrase':");
for (let i = 0; i < phrase.length; i++) {
  console.log(phrase[i]);
}

// contar quantas vezes a letra 'a' aparece em 'phrase'
let counter = 0;
for (let i = 0; i < phrase.length; i++) {
  if (phrase[i].toLowerCase() == 'a') {
    counter++;
  }
}
console.log("A letra 'a' aparece", counter, "vezes na frase.");

//loop 'while' para imprimir números de 1 a 10 no console
console.log("imprimindo números de 1 a 10 com um loop while:");
let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}
