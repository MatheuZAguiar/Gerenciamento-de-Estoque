package com.gerenciamento.estoque.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_estoque", schema = "public")
public class Estoque extends AbstractEntity{
    @Getter
    @Setter
    @Column(name = "cl_nome")
    private String nomeEstoque;

    @Getter @Setter
    @ManyToMany
    @JoinTable(name = "cl_estoquemovimentacao",
            joinColumns = @JoinColumn(name = "estoque_id"),
            inverseJoinColumns = @JoinColumn(name = "movimentacao_id")
    )
    private List<Movimentacao> movimentacao = new ArrayList<>();
}