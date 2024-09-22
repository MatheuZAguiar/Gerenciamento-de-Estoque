package com.gerenciamento.estoque.dto;

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

    public ProdutoDTO(Produto produto){
        id = produto.getId();
        ativo = produto.isAtivo();
        registro = produto.getRegistro();
        atualizar = produto.getAtualizar();
        nome = produto.getNome();
        descricao = produto.getDescricao();
        tipo = produto.getTipo();
    }

    public ProdutoDTO(Long id, boolean ativo, LocalDateTime registro, LocalDateTime atualizar, String nome, String descricao, Tipo tipo){
        this.id = id;
        this.ativo = ativo;
        this.registro = registro;
        this.atualizar = atualizar;
        this.nome = nome;
        this.descricao = descricao;
        this.tipo = tipo;
    }
}