package com.gerenciamento.estoque.service;

import com.gerenciamento.estoque.auditing.Audit;
import com.gerenciamento.estoque.dto.EstoqueDTO;
import com.gerenciamento.estoque.entity.Estoque;
import com.gerenciamento.estoque.repository.AuditRepository;
import com.gerenciamento.estoque.repository.EstoqueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class EstoqueService {

    private EstoqueRepository estoqueRepository;

    private AuditRepository auditRepository;

    @Autowired
    public EstoqueService(EstoqueRepository estoqueRepository, AuditRepository auditRepository){
        this.estoqueRepository = estoqueRepository;
        this.auditRepository = auditRepository;
    }

    @Transactional(readOnly = true)
    public Optional<EstoqueDTO> findById(Long id) {
        return estoqueRepository.findById(id).map(EstoqueDTO::new);
    }


    @Transactional(readOnly = true)
    public List<EstoqueDTO> findAll() {
        List<Estoque> estoques = estoqueRepository.findAll();
        return estoques.stream().map(EstoqueDTO::new).toList();
    }

    @Transactional(readOnly = true)
    public EstoqueDTO findByNomeEstoque(String nomeEstoque) {
        Estoque estoque = estoqueRepository.findByNomeEstoque(nomeEstoque);
        return new EstoqueDTO(estoque);
    }
    @Transactional(readOnly = true)
    public List<EstoqueDTO> findByAtivo(boolean ativo) {
        List<Estoque> estoques = estoqueRepository.findByAtivo(ativo);
        return estoques.stream()
                .map(EstoqueDTO::new)
                .toList();
    }


    @Transactional(readOnly = true)
    public List<EstoqueDTO> findByDiaRegistro(LocalDate registro) {
        List<Estoque> estoques = estoqueRepository.findByDiaRegistro(registro);

        return estoques.stream()
                .map(EstoqueDTO::new)
                .toList();
    }


    @Transactional(readOnly = true)
    public List<EstoqueDTO> findByDiaAtualizar(LocalDate atualizar) {
        List<Estoque> estoques = estoqueRepository.findByDiaAtualizar(atualizar);

        return estoques.stream()
                .map(EstoqueDTO::new)
                .toList();
    }


    public void validarEstoque(final Estoque estoque) {
        String nomeEstoque = estoque.getNomeEstoque();

        if (nomeEstoque == null || nomeEstoque.isEmpty()) {
            throw new IllegalArgumentException("Nome do Estoque não informado");
        }

        if (!nomeEstoque.matches("[a-zA-Z0-9 ]+")) {
            throw new IllegalArgumentException("Nome do Estoque inválido");
        }
    }

    @Transactional(rollbackFor = Exception.class)
    public void cadastrar(Estoque estoque) {
        validarEstoque(estoque);

        // Registra a operação de auditoria na tabela de auditoria
        Audit audit = new Audit();
        audit.setOperation("CREATE_ESTOQUE");
        audit.setCreatedBy(audit.getCreatedBy());
        audit.setCreateDate(audit.getCreateDate());
        auditRepository.save(audit);

        estoqueRepository.save(estoque);
    }

    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRES_NEW)
    public void atualizar(Long id, Estoque estoque) {
        validarEstoque(estoque);
        Optional<Estoque> estoqueExistenteOptional = estoqueRepository.findById(id);

        if (estoqueExistenteOptional.isPresent()) {
            Estoque estoqueExistente = estoqueExistenteOptional.get();
            estoqueExistente.setNomeEstoque(estoque.getNomeEstoque());

            // Atualizar as movimentações do estoque
            if (estoque.getMovimentacao() != null && !estoque.getMovimentacao().isEmpty()) {
                // Limpar as movimentações existentes
                estoqueExistente.getMovimentacao().clear();

                // Adicionar as novas movimentações
                estoqueExistente.getMovimentacao().addAll(estoque.getMovimentacao());
            }
            estoqueExistente.setAtualizar(LocalDateTime.now());

            // Registra a operação de auditoria na tabela de auditoria
            Audit audit = new Audit();
            audit.setOperation("INSERT_ESTOQUE");
            audit.setCreatedBy(audit.getCreatedBy());
            audit.setCreateDate(audit.getCreateDate());
            auditRepository.save(audit);


            estoqueRepository.save(estoqueExistente);
        } else {
            throw new IllegalArgumentException("ID de estoque inválido!");
        }
    }




    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRES_NEW)
    public void deletar(Long id) {
        Optional<Estoque> estoqueExistenteOptional = estoqueRepository.findById(id);

        if (estoqueExistenteOptional.isPresent()) {
            Estoque estoqueExistente = estoqueExistenteOptional.get();

            // Registra a operação de auditoria na tabela de auditoria
            Audit audit = new Audit();
            audit.setOperation("DELETE_ESTOQUE");
            audit.setCreatedBy(audit.getCreatedBy());
            audit.setCreateDate(audit.getCreateDate());
            auditRepository.save(audit);


            estoqueRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("ID de estoque inválido!");
        }
    }

}