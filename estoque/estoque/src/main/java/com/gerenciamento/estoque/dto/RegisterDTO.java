package com.gerenciamento.estoque.dto;


import com.gerenciamento.estoque.entity.UserRole;

public record RegisterDTO(String login, String password, UserRole role) {
}