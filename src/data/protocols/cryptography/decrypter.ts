export interface Decrypter {
  decrypt: (encryptedText: string) => Promise<unknown>;
}
