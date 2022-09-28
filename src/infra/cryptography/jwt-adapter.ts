import jwt from 'jsonwebtoken';
import { Encrypter, Decrypter, Decoder } from '@/src/data/protocols/cryptography';

export class JwtAdapter implements Encrypter, Decrypter, Decoder {
  private readonly secret: jwt.Secret;

  constructor(secret: string) {
    this.secret = secret;
  }

  public async encrypt(payload: string): Promise<string> {
    return jwt.sign(payload, this.secret, { algorithm: 'HS256' });
  }

  public async decrypt(token: string): Promise<jwt.JwtPayload> {
    return jwt.verify(token, this.secret) as jwt.JwtPayload;
  }

  public async decode(token: string): Promise<jwt.JwtPayload> {
    return jwt.decode(token, { json: true });
  }
}
