    const key = {
        'a': 'x', 'b': 'q', 'c': 'w', 'd': 'e', 'e': 'r', 'f': 't', 'g': 'y', 'h': 'u', 'i': 'i', 'j': 'o', 'k': 'p', 'l': 'a', 'm': 's',
        'n': 'd', 'o': 'f', 'p': 'g', 'q': 'h', 'r': 'j', 's': 'k', 't': 'l', 'u': 'z', 'v': 'x', 'w': 'c', 'x': 'v', 'y': 'b', 'z': 'n',
        'A': 'X', 'B': 'Q', 'C': 'W', 'D': 'E', 'E': 'R', 'F': 'T', 'G': 'Y', 'H': 'U', 'I': 'I', 'J': 'O', 'K': 'P', 'L': 'A', 'M': 'S',
        'N': 'D', 'O': 'F', 'P': 'G', 'Q': 'H', 'R': 'J', 'S': 'K', 'T': 'L', 'U': 'Z', 'V': 'X', 'W': 'C', 'X': 'V', 'Y': 'B', 'Z': 'N',
        ' ': ' ', '.': '.', ',': ',', '?': '?', '!': '!', ';': ';', ':': ':', '(': '(', ')': ')', '[': '[', ']': ']', '{': '{', '}': '}',
        '-': '-', '_': '_', '/': '/', '\\': '\\', '|': '|', '*': '*', '&': '&', '^': '^', '%': '%', '$': '$', '#': '#', '@': '@', '=': '=',
        '+': '+', '<': '<', '>': '>', '"': '"', '\'': '\''
    };

    function encryptText(text) {
        return text.split('').map(char => key[char] || char).join('');
    }

    function decryptText(text) {
        const reverseKey = {};
        for (let k in key) {
            reverseKey[key[k]] = k;
        }
        return text.split('').map(char => reverseKey[char] || char).join('');
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
