package com.gerenciamento.estoque.entity;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;

@Entity
@Table(name = "tb_movimentacao", schema = "public")
public class Movimentacao extends AbstractEntity{

    @Getter @Setter
    @OneToOne
    @JoinColumn(name = "produto_id")
    private Produto produtos;

    @Getter @Setter
    @Column(name = "entrada")
    private int entrada;

    @Getter @Setter
    @Column(name = "saida")
    private int saida;

    @Getter @Setter
    @Column(name = "totalProduto")
    private int totalProduto;

    @Getter @Setter
    @Column(name = "valorCompra", nullable = false)
    private BigDecimal valorCompra;

    @Getter @Setter
    @Column(name = "valorVenda", nullable = false)
    private BigDecimal valorVenda;

    @Getter @Setter
    @Column(name = "valorTotal", nullable = false)
    private BigDecimal valorTotal;
}