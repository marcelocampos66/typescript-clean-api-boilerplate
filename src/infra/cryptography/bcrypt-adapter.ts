import bcrypt from 'bcrypt';
import { Hasher, HashComparer } from '@/src/data/protocols/cryptography';

export class BcryptAdapter implements Hasher, HashComparer {
  private readonly salt: number;

  constructor(salt: number) {
    this.salt = salt;
  }

  public async hash(text: string): Promise<string> {
    return bcrypt.hash(text, this.salt);
  }

  public async compare(text: string, hash: string): Promise<boolean> {
    return bcrypt.compare(text, hash);
  }
}
