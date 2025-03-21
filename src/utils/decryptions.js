import { caesarEncryption } from "./encryptions";
import { genKey } from "./encryptions";
import { isLetter } from "./encryptions";
import { removeDuplicateLetters } from "./encryptions";

export function caesarDecryption(text, shift){
    return caesarEncryption(text, 26 - shift);
}

export function vigenereDecryption(text, key){
    let plaintext = "";
    text = text.toUpperCase().split(" ").join("");
    key = genKey(text, key);

    let count = 0;

    for(let i = 0; i < text.length; i++){
        if(isLetter(text[i])){
            count++;
            // Pi = (Ei - Ki) mod 26
            let decCode = ((text.charCodeAt(i) - key.charCodeAt(i) + 26) % 26) + 65;
            let decText = String.fromCharCode(decCode);

            plaintext = plaintext.concat("", decText);
            if (count % 5 == 0){
                plaintext = plaintext.concat("", " ");
            }
        }
    }
    return plaintext;
}

export function affineDecryption(text, a, b){
    text = text.toUpperCase();
    let plaintext = "";

    let a_inverse = 0;
    let flag = 0;
    let i = 0;

    // find inverse
    while(flag != 1 && i < 26){
        flag = (a * i) % 26;
        if(flag == 1){
            a_inverse = i;
        }
        i++;
    };

    for(let i = 0; i < text.length; i ++){
        if(text[i] != " "){
            let decCode = a_inverse * ((text.charCodeAt(i) - 65) - b + 26) % 26;
            let decASCII = String.fromCharCode(decCode + 65);
    
            plaintext += decASCII;
        } else {
            plaintext += " ";
        }
    }
    return plaintext;
}

export function playfairDecryption(text, key) {
    let result = "";
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    text = text.toUpperCase().split(" ").join("");
    key = key.toUpperCase().split(" ").join("");

    let arr = [];

    function findPosition(letter) {
        for (let row = 0; row < 5; row++) {
            let col = arr[row].indexOf(letter);
            if (col !== -1) return { row, col };
        }
        return null;
    }

    for (let i = 0; i < 5; i++) {
        let letters = [];
        arr.push(letters);
    }

    let total = key + alphabet;
    let encryptSquare = removeDuplicateLetters(total);

    for (let i = 0; i < 25; i++) {
        let index = Math.floor(i / 5);
        arr[index].push(encryptSquare[i]);
    }

    for (let i = 0; i < text.length; i += 2) {
        let a = text[i];
        let b = text[i + 1];
        let posA = findPosition(a);
        let posB = findPosition(b);

        if (posA.row === posB.row) {
            result += arr[posA.row][(posA.col + 4) % 5];
            result += arr[posB.row][(posB.col + 4) % 5];
        } else if (posA.col === posB.col) {
            result += arr[(posA.row + 4) % 5][posA.col];
            result += arr[(posB.row + 4) % 5][posB.col];
        } else {
            result += arr[posA.row][posB.col];
            result += arr[posB.row][posA.col];
        }
    }
    return result;
}