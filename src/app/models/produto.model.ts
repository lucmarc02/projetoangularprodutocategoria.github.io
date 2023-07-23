import { Categoria } from "./categoria.model";

export interface Produto {
  id?: number;
  nome: string;
  preco: number;
  quantidadeEstoque: number;
  ativo: boolean;
  dataValidade: Date;
  categoria: Categoria;
}
