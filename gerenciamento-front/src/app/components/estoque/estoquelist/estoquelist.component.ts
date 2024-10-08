import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Estoque } from '../../../models/estoque/estoque';
import { EstoqueService } from '../../../services/estoque/estoque-service.service';
@Component({
  selector: 'app-estoquelist',
  templateUrl: './estoquelist.component.html',
  styleUrls: ['./estoquelist.component.scss']
})
export class EstoquelistComponent {

  list: Estoque[] = [];

  estoqueSelecionadoParaEdicao: Estoque = new Estoque();
  indiceSelecionadoParaEdicao!: number;

  estoqueSelecionadoParaEdicao2: Estoque = new Estoque();
  indiceSelecionadoParaEdicao2!: number;

  @Output() retorno = new EventEmitter<Estoque>();
  @Input() modoLancamento: boolean = false;

  modalRef!: NgbModalRef;


  constructor(private datePipe: DatePipe, private router: Router, private modalService: NgbModal, private estoqueService: EstoqueService) {
    this.listAll();
  }

  listAll() {
    this.estoqueService.findAll().subscribe({
      next: list => {
        this.list = list;
      },
      error: erro => {
        alert('Observe o erro no console!');
        console.error(erro);
      }
    });
  }
  acessarEstoque(estoque: Estoque) {
    const onComplete = () => {
      this.listAll();
      this.modalRef.dismiss();
    };
  
    if (estoque.id) {
      this.estoqueService.atualizar(estoque.id, estoque).subscribe(onComplete);
    } else {
      this.estoqueService.cadastrar(estoque).subscribe(onComplete);
    }
  }
  
  
  
  
  adicionar(modal: any) {
    this.estoqueSelecionadoParaEdicao = new Estoque();
      this.modalRef = this.modalService.open(modal, { size: 'sm'});
  }

  addOuEditarEstoque(estoque: Estoque) {
    const onComplete = () => {
      this.listAll();
      this.modalRef.dismiss();
    };

    if(estoque.id) {
      this.estoqueService.atualizar(estoque.id, estoque).subscribe(onComplete);
    } else {
      this.estoqueService.cadastrar(estoque).subscribe(onComplete);
    }
  }
  
  editar(modal: any,  estoque: Estoque, indice: number){
    this.estoqueSelecionadoParaEdicao = { ...estoque};
    this.indiceSelecionadoParaEdicao = indice;
    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  acessar(modal2: any,  estoque: Estoque, indice: number){
    this.estoqueSelecionadoParaEdicao2 = { ...estoque};

    console.log(this.estoqueSelecionadoParaEdicao2.id);
    this.indiceSelecionadoParaEdicao2 = indice;
    this.modalRef = this.modalService.open(modal2, { size: 'sm' });
  }
}



/*
acessar(estoque: Estoque) {
  const onComplete = () => {
    // Fetch movements associated with the selected stock
    this.fetchMovimentacoesDoEstoque(estoque);
    this.listAll();
    this.modalRef.dismiss();
  };

  if (estoque.id) {
    this.estoqueService.atualizar(estoque.id, estoque).subscribe(onComplete);
  } else {
    this.estoqueService.cadastrar(estoque).subscribe(onComplete);
  }
}


fetchMovimentacoesDoEstoque(estoque: Estoque) {
  this.estoqueService.getMovimentacoesDoEstoque(estoque.id).subscribe({
      next: movimentacoes => {
          this.movimentacoesDoEstoque = movimentacoes;
      },
      error: erro => {
          const errorMessage = erro.error ? erro.error : 'Erro ao buscar as movimentações do estoque.';
          alert(errorMessage);
          console.error(erro);
      }
  });
}
*/