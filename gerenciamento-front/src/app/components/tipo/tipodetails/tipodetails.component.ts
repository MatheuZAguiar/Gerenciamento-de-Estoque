import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Tipo } from '../../../models/tipo/tipo';
import { TipoService } from '../../../services/tipo/tipo-service.service';
@Component({
  selector: 'app-tipodetails',
  templateUrl: './tipodetails.component.html',
  styleUrls: ['./tipodetails.component.scss']
})
export class TipodetailsComponent {
  @Input() tipo: Tipo = new Tipo();
  @Output() retorno = new EventEmitter<Tipo>();

  tipoService = inject(TipoService);

  constructor(){}

  salvar(){
    this.retorno.emit(this.tipo);
    console.log(this.tipo);
  }

  desativar() {
    this.tipo.ativo = false;
  }

  ativar() {
    this.tipo.ativo = true;
  }
}