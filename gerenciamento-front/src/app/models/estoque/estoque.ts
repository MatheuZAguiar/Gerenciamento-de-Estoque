import { Movimentacao } from "../movimentacao/movimentacao";

export class Estoque {
    id!: number;
    ativo!: boolean;
    registro!: Date;
    atualizar!: Date;
    nomeEstoque!: string;
    movimentacao: Movimentacao[];

    constructor(){
        this.movimentacao = [];
    }
} 