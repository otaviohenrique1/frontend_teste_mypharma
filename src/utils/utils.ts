import { SHA512, enc } from "crypto-js";

export function sha512(senha: string) {
  return SHA512(senha).toString(enc.Hex);
}
