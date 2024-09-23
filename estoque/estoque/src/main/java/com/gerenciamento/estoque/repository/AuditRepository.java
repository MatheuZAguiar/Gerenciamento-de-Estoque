package com.gerenciamento.estoque.repository;

import com.gerenciamento.estoque.auditing.Audit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuditRepository extends JpaRepository<Audit, Long> {
}