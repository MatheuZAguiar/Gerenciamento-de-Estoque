import { Routes } from '@angular/router';
import { LoginComponent } from './components/sistema/login/login.component';
import { CadastroComponent } from './components/sistema/cadastro/cadastro.component';
import { IndexComponent } from './layout/index/index.component';
import { Rotaguard } from './guards/rotaguard.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TipolistComponent } from './components/tipo/tipolist/tipolist.component';
import { ProdutolistComponent } from './components/produto/produtolist/produtolist.component';
import { EstoquelistComponent } from './components/estoque/estoquelist/estoquelist.component';
import { EstoquemovimentacaoComponent } from './components/estoque/estoquemovimentacao/estoquemovimentacao.component';
import { MovimentacaolistComponent } from './components/movimentacao/movimentacaolist/movimentacaolist.component';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: 'full' },
    { path:"login", component: LoginComponent},
    { path: "cadastro", component: CadastroComponent},
    {
      path: "admin", component: IndexComponent, canActivate:[Rotaguard], children: [
        {path: "dashboard", component: DashboardComponent},
        { path: "tipo", component: TipolistComponent },
        { path: "produto", component: ProdutolistComponent },
        { path: "estoque", component: EstoquelistComponent},
        { path: "movimentacao", component: MovimentacaolistComponent},
        { path: "estoquemovimentacao", component: EstoquemovimentacaoComponent}
      ]
    }
  
  ];