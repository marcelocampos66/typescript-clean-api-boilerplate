export class ErrorHandler extends Error {
  public readonly status: number;
  public readonly message: string;
  public readonly name: string;

  constructor(status: number, message: string, name?: string) {
    super(message);
    this.name = name || '';
    this.status = status;
    this.message = message;
  }
}
