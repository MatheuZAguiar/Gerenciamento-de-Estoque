package com.gerenciamento.estoque.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_fornecedor", schema = "public")
public class Fornecedor extends AbstractEntity{

    @Getter @Setter
    @Column(name = "nome", nullable = false)
    private String nome;

    @Getter @Setter
    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Getter @Setter
    @Column(name = "telefone", nullable = false)
    private String telefone;

    @Getter @Setter
    @Column(name = "cnpj", nullable = false, unique = true)
    private String cnpj;
}
