// Função para obter a chave de descriptografia do localStorage, ou gerar uma nova
function getDecryptionKey() {
    let key = localStorage.getItem('decryptionKey');
    if (!key) {
        key = generateDecryptionKey();
        localStorage.setItem('decryptionKey', key);
    }
    return key;
}

// Função para gerar uma chave de descriptografia aleatória
function generateDecryptionKey() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ .,?!;:()[]{}-_/\\|*&^%$#@=+<>\"\'';
    let shuffledAlphabet = alphabet.split('').sort(() => Math.random() - 0.5).join('');
    let reverseAlphabet = alphabet.split('').reverse().join('');
    let key = {};
    for (let i = 0; i < alphabet.length; i++) {
        key[shuffledAlphabet[i]] = reverseAlphabet[i];
    }
    return key;
}

// Função para descriptografar o texto usando a chave de descriptografia
function decryptText(text, key) {
    return text.split('').map(char => key[char] || char).join('');
}

// Obter a chave de descriptografia
const decryptionKey = getDecryptionKey();

// Event listener para o botão de descriptografar
decryptButton.addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const outputText = decryptText(inputText, decryptionKey);
    document.getElementById('outputText').textContent = outputText;
});

// Exemplo de uso da função de descriptografia
const encryptedText = 'Texto criptografado';
const decryptedText = decryptText(encryptedText, decryptionKey);
console.log(decryptedText); // Saída: 'Texto descriptografado'
