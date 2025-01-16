function invertString(str) {
    let inverted = "";
    for (let i = str.length - 1; i >= 0; i--) {
        inverted += str[i];
    }
    return inverted;
}


const stringToInvert = "Exemplo de string";
console.log(`String original: "${stringToInvert}"`);
console.log(`String inverted: "${invertString(stringToInvert)}"`);
