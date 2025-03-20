import { caesarEncryption } from "./encryptions";
import { genKey } from "./encryptions";
import { isLetter } from "./encryptions";

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
    };

    for(let i = 0; i < text.length; i ++){
        if(text[i] != " "){
            let decCode = a_inverse * ((text.charCodeAt(i) - 65) - b) % 26;
            let decASCII = String.fromCharCode(decCode + 65);
    
            plaintext += decASCII;
        } else {
            plaintext += " ";
        }
    }
    return plaintext;
}