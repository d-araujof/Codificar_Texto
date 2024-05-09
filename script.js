const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ .,?!;:()[]{}-_/\\|*&^%$#@=+<>\"\'';
let shuffledAlphabet = alphabet.split('').sort(() => Math.random() - 0.5).join('');
let reverseAlphabet = alphabet.split('').reverse().join('');

function encryptText(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let index = alphabet.indexOf(char);
        if (index !== -1) {
            result += shuffledAlphabet[index];
        } else {
            result += char;
        }
    }
    return result;
}

function decryptText(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let index = shuffledAlphabet.indexOf(char);
        if (index !== -1) {
            result += alphabet[index];
        } else {
            result += char;
        }
    }
    return result;
}

const encryptButton = document.getElementById('encryptButton');
encryptButton.addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const outputText = encryptText(inputText);
    document.getElementById('outputText').textContent = outputText;
});

const decryptButton = document.getElementById('decryptButton');
decryptButton.addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const outputText = decryptText(inputText);
    document.getElementById('outputText').textContent = outputText;
});