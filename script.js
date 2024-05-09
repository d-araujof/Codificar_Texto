document.getElementById('encryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encryptText(inputText);
    document.getElementById('outputText').textContent = encryptedText;
});

document.getElementById('decryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decryptText(inputText);
    document.getElementById('outputText').textContent = decryptedText;
});

function encryptText(text) {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        // Incrementa o código ASCII em 1
        charCode++;
        encrypted += String.fromCharCode(charCode);
    }
    return encrypted;
}

function decryptText(text) {
    let decrypted = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        // Decrementa o código ASCII em 1
        charCode--;
        decrypted += String.fromCharCode(charCode);
    }
    return decrypted;
}
