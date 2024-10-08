import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoListComponent } from './components/tipo/tipolist/tipolist.component';
import { ProdutolistComponent } from './components/produto/produtolist/produtolist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { CadastroComponent } from './components/sistema/cadastro/cadastro.component';
import { EstoquelistComponent } from './components/estoque/estoquelist/estoquelist.component';
import { MovimentacaolistComponent } from './components/movimentacao/movimentacaolist/movimentacaolist.component';
import { EstoquemovimentacaoComponent } from './components/estoque/estoquemovimentacao/estoquemovimentacao.component';
import { Rotaguard } from './guards/rotaguard.guard';

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path:"login", component: LoginComponent},
  { path: "cadastro", component: CadastroComponent},
  {
    path: "admin", component: IndexComponent, canActivate:[Rotaguard], children: [
      {path: "dashboard", component: DashboardComponent},
      { path: "tipo", component: TipoListComponent },
      { path: "produto", component: ProdutolistComponent },
      { path: "estoque", component: EstoquelistComponent},
      { path: "movimentacao", component: MovimentacaolistComponent},
      { path: "estoquemovimentacao", component: EstoquemovimentacaoComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }