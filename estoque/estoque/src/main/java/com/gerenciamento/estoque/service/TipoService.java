package com.gerenciamento.estoque.service;

import com.gerenciamento.estoque.auditing.Audit;
import com.gerenciamento.estoque.dto.TipoDTO;
import com.gerenciamento.estoque.entity.Tipo;
import com.gerenciamento.estoque.repository.AuditRepository;
import com.gerenciamento.estoque.repository.TipoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TipoService {

    private TipoRepository tipoRepository;

    private AuditRepository auditRepository;

    @Autowired
    public TipoService(TipoRepository tipoRepository, AuditRepository auditRepository) {
        this.tipoRepository = tipoRepository;
        this.auditRepository = auditRepository;
    }

    @Transactional(readOnly = true)
    public Optional<TipoDTO> findById(Long id){
        return  tipoRepository.findById(id).map(TipoDTO::new);
    }

    @Transactional(readOnly = true)
    public List<TipoDTO> findAll(){
        List<Tipo> tipos = tipoRepository.findAll();
        return tipos.stream().map(TipoDTO::new).toList();
    }

    @Transactional(readOnly = true)
    public List<TipoDTO> findByAtivo(boolean ativo){
        List<Tipo> tipoList = tipoRepository.findByAtivo(ativo);
        return tipoList.stream().map(TipoDTO::new).toList();
    }

    public void validarTipo(final Tipo tipo){
        String nameTipo = tipo.getNameTipo();

        if (nameTipo == null || nameTipo.isEmpty()) {
            throw new IllegalArgumentException("Nome do Tipo não informado!");
        }
        if (!nameTipo.matches("[a-zA-Z0-9 ]+")){
            throw new IllegalArgumentException("Nome do Tipo inválido!");
        }
    }

    @Transactional(rollbackFor = Exception.class)
    public void cadastrar(Tipo tipo){
        validarTipo(tipo);

        // Registra a operação de auditoria na tabela de auditoria
        Audit audit = new Audit();
        audit.setOperation("CREATE_TIPO");
        audit.setCreatedBy(audit.getCreatedBy());
        audit.setCreateDate(audit.getCreateDate());
        auditRepository.save(audit);

        tipoRepository.save(tipo);
    }

    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRES_NEW)
    public void atualizar(Long id, Tipo tipo) {
        validarTipo(tipo);
        Optional<Tipo> tipoOptional = tipoRepository.findById(id);

        if (tipoOptional.isPresent()) {
            Tipo tipoExistente = tipoOptional.get();
            tipoExistente.setAtivo(tipo.isAtivo());
            tipoExistente.setNameTipo(tipo.getNameTipo());

            // Registra a operação de auditoria na tabela de auditoria
            Audit audit = new Audit();
            audit.setOperation("INSERT_TIPO");
            audit.setCreatedBy(audit.getCreatedBy());
            audit.setCreateDate(audit.getCreateDate());
            auditRepository.save(audit);

            tipoRepository.save(tipoExistente);
        } else {
            throw new IllegalArgumentException("ID de tipo inválido!");
        }
    }


    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRES_NEW)
    public void deletar(Long id){
        Optional<Tipo> tipoOptional = tipoRepository.findById(id);

        if (tipoOptional.isPresent()){
            Tipo tipo = tipoOptional.get();

            // Registra a operação de auditoria na tabela de auditoria
            Audit audit = new Audit();
            audit.setOperation("DELETE_TIPO");
            audit.setCreatedBy(audit.getCreatedBy());
            audit.setCreateDate(audit.getCreateDate());
            auditRepository.save(audit);

            tipoRepository.deleteById(id);
        } else{
            throw new IllegalArgumentException("ID de tipo inválido!");
        }
    }
}