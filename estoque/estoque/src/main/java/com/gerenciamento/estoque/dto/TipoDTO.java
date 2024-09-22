package com.gerenciamento.estoque.dto;

import com.gerenciamento.estoque.entity.Tipo;
import lombok.*;

import java.time.LocalDateTime;

@Getter @Setter
public class TipoDTO {

    private Long id;
    private boolean ativo;
    private LocalDateTime registro;
    private LocalDateTime atualizar;
    private String nameTipo;

    public TipoDTO(Tipo tipo){
        id = tipo.getId();
        ativo = tipo.isAtivo();
        registro = tipo.getRegistro();
        atualizar = tipo.getAtualizar();
        nameTipo = tipo.getNameTipo();
    }

    public TipoDTO(Long id, boolean ativo, LocalDateTime registro, LocalDateTime atualizar, String nameTipo){
        this.id = id;
        this.ativo = ativo;
        this.registro = registro;
        this.atualizar = atualizar;
        this.nameTipo = nameTipo;
    }

}