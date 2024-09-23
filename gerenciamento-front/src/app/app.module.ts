import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { ProdutodetailsComponent } from './components/produto/produtodetails/produtodetails.component';
import { ProdutolistComponent } from './components/produto/produtolist/produtolist.component';
import { DatePipe } from '@angular/common';
import { IndexComponent } from './layout/index/index.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { CadastroComponent } from './components/sistema/cadastro/cadastro.component';
import { EstoquelistComponent } from './components/estoque/estoquelist/estoquelist.component';
import { EstoquedetailsComponent } from './components/estoque/estoquedetails/estoquedetails.component';
import { MovimentacaodetailsComponent } from './components/movimentacao/movimentacaodetails/movimentacaodetails.component';
import { MovimentacaolistComponent } from './components/movimentacao/movimentacaolist/movimentacaolist.component';
import { EstoquemovimentacaoComponent } from './components/estoque/estoquemovimentacao/estoquemovimentacao.component';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { LoginComponent } from './components/sistema/login/login.component';
import { FornecedorlistComponent } from './components/fornecedor/fornecedorlist/fornecedorlist.component';
import { FornecedordetailsComponent } from './components/fornecedor/fornecedordetails/fornecedordetails.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TipoListComponent } from './components/tipo/tipolist/tipolist.component';
import { TipodetailsComponent } from './components/tipo/tipodetails/tipodetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    IndexComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    EstoquelistComponent,
    EstoquedetailsComponent,
    EstoquemovimentacaoComponent,
    ProdutolistComponent,
    ProdutodetailsComponent,
    TipoListComponent,
    TipodetailsComponent,
    MovimentacaodetailsComponent,
    MovimentacaolistComponent,
    FornecedorlistComponent,
    FornecedordetailsComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [DatePipe,AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }