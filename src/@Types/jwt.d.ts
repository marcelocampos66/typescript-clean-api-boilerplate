declare namespace jwt {
  export interface JwtPayload {
    id: number;
    name: string;
    email: string;
    roles: string[];
  }
}
