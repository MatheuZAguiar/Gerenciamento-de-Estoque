import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Estoque } from '../../../models/estoque/estoque';
import { Movimentacao } from '../../../models/movimentacao/movimentacao';
import { EstoqueService } from '../../../services/estoque/estoque-service.service';
import { MovimentacaolistComponent } from '../../movimentacao/movimentacaolist/movimentacaolist.component';

@Component({
  selector: 'app-estoquedetails',
  templateUrl: './estoquedetails.component.html',
  styleUrls: ['./estoquedetails.component.scss']
})
export class EstoquedetailsComponent {
  
  @Input() estoque: Estoque = new Estoque();
  @Output() retorno = new EventEmitter<Estoque>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  estoqueService = inject(EstoqueService);

  constructor(){}

  salvar():void {
    this.retorno.emit(this.estoque);
  }

  lancar(modal: any): void{
    this,this.modalRef = this.modalService.open(modal, { size:'lg'});
    console.log(this.estoque.movimentacao);
  }

  retornoMovimentacaoList(movimentacao: Movimentacao): void {
    this.estoque.movimentacao.push(movimentacao); // Adicionando a nova movimentação ao array do estoque
    this.modalRef.dismiss();
  }
  

  abrirModalSelecaoMovimentacao(): void{
    this.modalRef = this.modalService.open(MovimentacaolistComponent, {size: 'lg'});
    this.estoque.movimentacao = [];
    this.modalRef.close();
  }
}