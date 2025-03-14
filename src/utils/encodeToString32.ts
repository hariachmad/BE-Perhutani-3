import * as CryptoJS from "crypto-js";


export default function encodeTo32Char(numberString : string) {

    const hash = CryptoJS.SHA256(numberString).toString(CryptoJS.enc.Hex);

    const encodedString = hash.substring(0, 32);

    return encodedString;
}