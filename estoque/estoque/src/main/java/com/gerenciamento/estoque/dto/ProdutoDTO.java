package com.gerenciamento.estoque.dto;

import com.gerenciamento.estoque.entity.Fornecedor;
import com.gerenciamento.estoque.entity.Produto;
import com.gerenciamento.estoque.entity.Tipo;
import lombok.*;

import java.time.LocalDateTime;

@Getter @Setter
public class ProdutoDTO {

    private Long id;
    private boolean ativo;
    private LocalDateTime registro;
    private LocalDateTime atualizar;
    private String nome;
    private String descricao;
    private String codigo;
    private Tipo tipo;
    private Fornecedor fornecedor;

    public ProdutoDTO(Produto produto){
        id = produto.getId();
        ativo = produto.isAtivo();
        registro = produto.getRegistro();
        atualizar = produto.getAtualizar();
        nome = produto.getNome();
        descricao = produto.getDescricao();
        tipo = produto.getTipo();
        fornecedor = produto.getFornecedor();
    }

    public ProdutoDTO(Long id, boolean ativo, LocalDateTime registro, LocalDateTime atualizar, String nome, String descricao, String codigo, Tipo tipo, Fornecedor fornecedor) {
        this.id = id;
        this.ativo = ativo;
        this.registro = registro;
        this.atualizar = atualizar;
        this.nome = nome;
        this.descricao = descricao;
        this.codigo = codigo;
        this.tipo = tipo;
        this.fornecedor = fornecedor;
    }
}