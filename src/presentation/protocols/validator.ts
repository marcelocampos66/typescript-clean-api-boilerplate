export interface Validator {
  validate(input: unknown): Error
}
