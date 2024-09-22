package com.gerenciamento.estoque.service;

import com.gerenciamento.estoque.auditing.Audit;
import com.gerenciamento.estoque.dto.FornecedorDTO;
import com.gerenciamento.estoque.entity.Fornecedor;
import com.gerenciamento.estoque.repository.AuditRepository;
import com.gerenciamento.estoque.repository.FornecedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class FornecedorService {

    private final FornecedorRepository fornecedorRepository;

    private AuditRepository auditRepository;

    @Autowired
    public FornecedorService(FornecedorRepository fornecedorRepository, AuditRepository auditRepository) {
        this.fornecedorRepository = fornecedorRepository;
        this.auditRepository = auditRepository;
    }

    @Transactional(readOnly = true)
    public Optional<FornecedorDTO> findById(Long id) {
        return fornecedorRepository.findById(id).map(FornecedorDTO::new);
    }

    @Transactional(readOnly = true)
    public List<FornecedorDTO> findAll() {
        List<Fornecedor> fornecedores = fornecedorRepository.findAll();
        return fornecedores.stream().map(FornecedorDTO::new).toList();
    }

    @Transactional
    public void save(Fornecedor fornecedor) {

        // Registra a operação de auditoria na tabela de auditoria
        Audit audit = new Audit();
        audit.setOperation("CREATE_FORNECEDOR");
        audit.setCreatedBy(audit.getCreatedBy());
        audit.setCreateDate(audit.getCreateDate());
        auditRepository.save(audit);


        fornecedorRepository.save(fornecedor);
    }

    @Transactional
    public void update(Long id, Fornecedor fornecedorAtualizado) {
        Optional<Fornecedor> fornecedorOptional = fornecedorRepository.findById(id);
        if (fornecedorOptional.isPresent()) {
            Fornecedor fornecedorExistente = fornecedorOptional.get();
            fornecedorExistente.setNome(fornecedorAtualizado.getNome());
            fornecedorExistente.setEmail(fornecedorAtualizado.getEmail());
            fornecedorExistente.setTelefone(fornecedorAtualizado.getTelefone());
            fornecedorExistente.setCnpj(fornecedorAtualizado.getCnpj());

            // Registra a operação de auditoria na tabela de auditoria
            Audit audit = new Audit();
            audit.setOperation("INSERT_FORNECEDOR");
            audit.setCreatedBy(audit.getCreatedBy());
            audit.setCreateDate(audit.getCreateDate());
            auditRepository.save(audit);


            fornecedorRepository.save(fornecedorExistente);
        } else {
            throw new IllegalArgumentException("Fornecedor não encontrado!");
        }
    }

    @Transactional
    public void delete(Long id) {

        // Registra a operação de auditoria na tabela de auditoria
        Audit audit = new Audit();
        audit.setOperation("DELETE_FORNECEDOR");
        audit.setCreatedBy(audit.getCreatedBy());
        audit.setCreateDate(audit.getCreateDate());
        auditRepository.save(audit);


        fornecedorRepository.deleteById(id);
    }
}
