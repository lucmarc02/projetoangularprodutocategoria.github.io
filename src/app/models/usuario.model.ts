export interface Usuario {
  id: number;
  nome: string;
  login: string;
  admin: boolean;
  senha?: string;
}
