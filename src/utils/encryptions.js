function isLetter(c){
    return c.toUpperCase() != c.toLowerCase();
}

export function caesarEncryption(text, shift){
    let result = "";
    text = text.toUpperCase();

    for(let i = 0; i < text.length; i++){
        if(isLetter(text[i])){
            let ascii = text.charCodeAt(i);
            let newLetter = String.fromCharCode(ascii + shift);
            result = result.concat("", newLetter);
        } else if (text[i] == " "){
            result = result.concat("", " ");
        }
    }

    return result;
}