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

// generate key
// eg: text -> waterfall
// eg: key -> hello -> hellohell
function genKey(text, key){
    key = key.split("");
    if (key.length == text.length){
        return key.join("");
    } else {
        let temp = key.length;
        for (let i = 0; i < (text.length - temp) ; i++) {
            key.push(key[i % ((key).length)]);
        }
    } return key.join("");
}