package com.gerenciamento.estoque.dto;

import com.gerenciamento.estoque.entity.Fornecedor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class FornecedorDTO {

    private Long id;
    private boolean ativo;
    private LocalDateTime registro;
    private LocalDateTime atualizar;
    private String nome;
    private String email;
    private String telefone;
    private String cnpj;

    public FornecedorDTO(Fornecedor fornecedor) {
        this.id = fornecedor.getId();
        this.ativo = fornecedor.isAtivo();
        this.registro = fornecedor.getRegistro();
        this.atualizar = fornecedor.getAtualizar();
        this.nome = fornecedor.getNome();
        this.email = fornecedor.getEmail();
        this.telefone = fornecedor.getTelefone();
        this.cnpj = fornecedor.getCnpj();
    }

    public FornecedorDTO(Long id, boolean ativo, LocalDateTime registro, LocalDateTime atualizar, String nome, String email, String telefone, String cnpj) {
        this.id = id;
        this.ativo = ativo;
        this.registro = registro;
        this.atualizar = atualizar;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cnpj = cnpj;
    }
}
