import { caesarEncryption } from "./encryptions";
import { genKey } from "./encryptions";
import { isLetter } from "./encryptions";

export function caesarDecryption(text, shift){
    return caesarEncryption(text, 26 - shift);
}