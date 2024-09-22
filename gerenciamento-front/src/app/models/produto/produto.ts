import { Tipo } from "../tipo/tipo";
import { Fornecedor } from "../fornecedor/fornecedor";

export class Produto {
    id!: number;
    ativo!: boolean;
    registro!: string;
    atualizar!: string;
    nome!: string;
    tipo!: Tipo;
    fornecedor!: Fornecedor;
    descricao!: string;
    filtro: string = '';
}