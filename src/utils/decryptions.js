import { caesarEncryption } from "./encryptions";

export function caesarDecryption(text, shift){
    return caesarEncryption(text, -shift);
}