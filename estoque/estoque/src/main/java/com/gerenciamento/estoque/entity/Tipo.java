package com.gerenciamento.estoque.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tb_tipo",schema = "public")
public class Tipo extends AbstractEntity{
    @Getter @Setter
    @Column(name = "cl_tipo")
    private String nameTipo;
}