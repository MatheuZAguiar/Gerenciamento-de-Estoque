package com.gerenciamento.estoque.dto;

import com.gerenciamento.estoque.entity.Movimentacao;
import com.gerenciamento.estoque.entity.Produto;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter @Setter
public class MovimentacaoDTO {
    private Long id;
    private boolean ativo;
    private LocalDateTime registro;
    private LocalDateTime atualizar;
    private int totalProduto;
    private BigDecimal valorCompra;
    private BigDecimal valorVenda;
    private Produto produtos;
    private int entrada;
    private int saida;
    private BigDecimal valorTotal;

    public MovimentacaoDTO(Movimentacao movimentacao){
        id = movimentacao.getId();
        ativo = movimentacao.isAtivo();
        registro = movimentacao.getRegistro();
        atualizar = movimentacao.getAtualizar();
        totalProduto = movimentacao.getTotalProduto();
        valorCompra = movimentacao.getValorCompra();
        valorVenda = movimentacao.getValorVenda();
        produtos = movimentacao.getProdutos();
        entrada = movimentacao.getEntrada();
        saida = movimentacao.getSaida();
        valorTotal = movimentacao.getValorTotal();

    }
    public MovimentacaoDTO(Long id, boolean ativo, LocalDateTime registro, LocalDateTime atualizar, int totalProduto, BigDecimal valorCompra, BigDecimal valorVenda, Produto produtos, int entrada, int saida, BigDecimal valorTotal) {
        this.id = id;
        this.ativo = ativo;
        this.registro = registro;
        this.atualizar = atualizar;
        this.totalProduto = totalProduto;
        this.valorCompra = valorCompra;
        this.valorVenda = valorVenda;
        this.produtos = produtos;
        this.entrada = entrada;
        this.saida = saida;
        this.valorTotal = valorTotal;
    }
}