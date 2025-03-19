import { caesarEncryption } from "./encryptions";

export function caesarDecryption(text, shift){
    return caesarEncryption(text, 26 - shift);
}