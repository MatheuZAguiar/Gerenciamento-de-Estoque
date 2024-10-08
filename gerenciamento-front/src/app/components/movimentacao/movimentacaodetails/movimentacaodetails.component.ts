import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Movimentacao } from '../../../models/movimentacao/movimentacao';
import { Produto } from '../../../models/produto/produto';
import { MovimentacaoService } from '../../../services/movimentacao/movimentacao-service.service';
import { ProdutodetailsComponent } from '../../produto/produtodetails/produtodetails.component';

@Component({
  selector: 'app-movimentacaodetails',
  templateUrl: './movimentacaodetails.component.html',
  styleUrls: ['./movimentacaodetails.component.scss']
})
export class MovimentacaodetailsComponent {

  @Input() movimentacao: Movimentacao = new Movimentacao();
  @Output() retorno = new EventEmitter<Movimentacao>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  movimentacaoService = inject(MovimentacaoService);

  constructor(){}

  salvar():void{
    console.log(this.movimentacao);
    this.retorno.emit(this.movimentacao);
  }

  lancar(modal: any): void{
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  retornoProdutoList(produtos: Produto){
    this.movimentacao.produtos = produtos;
    this.modalRef.dismiss();
  }

  abrirModalSelecaoProduto(): void{
    this.modalRef = this.modalService.open(ProdutodetailsComponent, { size: 'lg'});
    this.modalRef.componentInstance.produtoSelecionado.subscribe((produtos: Produto) =>{
      this.movimentacao.produtos = produtos;
      this.modalRef.close();
    })
  }
}