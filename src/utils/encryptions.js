function isLetter(c){
    return c.toUpperCase() != c.toLowerCase();
}

export function caesarEncryption(text, shift){
    let result = "";
    text = text.toUpperCase();

    for(let i = 0; i < text.length; i++){
        if(isLetter(text[i])){
            let ascii = text.charCodeAt(i);
            let newAscii = ((ascii - 65 + shift) % 26) + 65
            let newLetter = String.fromCharCode(newAscii);
            result = result.concat("", newLetter);
        } else if (text[i] == " "){
            result = result.concat("", " ");
        }
    }

    return result;
}