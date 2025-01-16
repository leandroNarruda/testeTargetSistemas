function isFibonacciNumber(num) {
    if (num < 0) return false;

    let a = 0, b = 1;

    while (a <= num) {
        if (a === num) {
            return true;
        }
        [a, b] = [b, a + b];
    }

    return false;
}

//um exemplo de uso a seguir:

const inputNumber = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"), 10);

if (isNaN(inputNumber)) {
    console.log("Por favor, insira um número válido.");
} else {
    if (isFibonacciNumber(inputNumber)) {
        console.log(`O número ${inputNumber} tem na sequência de Fibonacci.`);
    } else {
        console.log(`O número ${inputNumber} nao tem na  sequência de Fibonacci`);
    }
}
