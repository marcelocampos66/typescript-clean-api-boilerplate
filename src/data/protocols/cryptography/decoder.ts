export interface Decoder {
  decode: (encryptedText: string) => Promise<unknown>
}
