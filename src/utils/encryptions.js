export function isLetter(c){
    return c.toUpperCase() != c.toLowerCase();
};

function removeDuplicateLetters(str) {
    let seen = new Set();
    let result = '';
    
    for (let char of str) {
        let normalizedChar = (char === 'J' || char === 'I') ? 'I' : char;
        if (!seen.has(normalizedChar)) {
            seen.add(normalizedChar);
            result += char;
        }
    }
    
    return result;
}

export function caesarEncryption(text, shift){
    let result = "";
    text = text.toUpperCase();

    for(let i = 0; i < text.length; i++){
        if(isLetter(text[i])){
            let ascii = text.charCodeAt(i);
            let newAscii = ((ascii - 65 + shift) % 26) + 65;
            let newLetter = String.fromCharCode(newAscii);
            result = result.concat("", newLetter);
        } else if (text[i] == " "){
            result = result.concat("", " ");
        }
    }

    return result;
}

// generate key
// eg: text -> waterfall
// eg: key -> hello -> hellohell
export function genKey(text, key){
    key = key.toUpperCase();
    return key.repeat(Math.ceil(text.length / key.length)).slice(0, text.length);;
}

export function vigenereEncryption(text, key){
    let result = "";
    text = text.toUpperCase().split(" ").join("");
    key = genKey(text, key);

    let count = 0;

    for(let i = 0; i < text.length; i++){
        if(isLetter(text[i])){
            count++;
            // Ei = (Pi + Ki) mod 26
            let encCode = ((text.charCodeAt(i) + key.charCodeAt(i) - 130) % 26) + 65;
            let encText = String.fromCharCode(encCode);

            result = result.concat("", encText);
            if (count % 5 == 0){
                result = result.concat("", " ");
            }
        }
    }
    return result;
}

export function affineEncryption(text, a, b){
    let result = "";
    text = text.toUpperCase();

    for(let i = 0; i < text.length; i++){
        if(text[i] != " "){
            // E = (a * x + b) mod 26
            let encCode = (a * (text.charCodeAt(i) - 65) + b) % 26;
            let encASCII = String.fromCharCode(encCode + 65);

            result += encASCII;
        } else {
            result += " ";
        }
    }
    return result;
}

export function playfairEncryption(text, key){
    let result = "";
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    text = text.toUpperCase().split(" ").join("");
    key = key.toUpperCase().split(" ").join("");

    // to hold the rows of 5 letters
    let arr = [];
    for(let i = 0; i < 5; i++){
        let letters = [];
        arr.push(letters);
    }

    // remove duplicates
    let total = key + alphabet;
    let encryptSquare = removeDuplicateLetters(total);

    // create the playfair square
    for(let i = 0; i < 25; i++){
        let index = Math.floor(i / 5);
        arr[index].push(encryptSquare[i]);
    }

    // break text into pairs
    let pairs = [];
    for (let i = 0; i < text.length; i += 2) {
        let first = text[i];
        let second = text[i + 1] || 'X';
        if (first === second) {
            second = 'X';
            i--;
        }
        pairs.push([first, second]);
    }
}