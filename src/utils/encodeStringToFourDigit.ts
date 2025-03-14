import * as crypto from "crypto"

export async function encodeStringToFourDigit(input) {
    const hash = crypto.createHash('sha256').update(input).digest();

    let bigNumber = 0n;
    for (let i = 0; i < Math.min(8, hash.length); i++) {
        bigNumber = (bigNumber << 8n) | BigInt(hash[i]);
    }

    const result = Number(bigNumber % 10000n);
    return Promise.resolve(result)
}