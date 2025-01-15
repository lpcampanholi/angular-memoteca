import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormPensamentoComponent } from './components/form-pensamento/form-pensamento.component';
import { ListaPensamentosComponent } from './components/lista-pensamentos/lista-pensamentos.component';
import { MensagemExcluirPensamentoComponent } from './components/mensagem-excluir-pensamento/mensagem-excluir-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  },
  {
    path: 'criar',
    component: FormPensamentoComponent
  },
  {
    path: 'listar',
    component: ListaPensamentosComponent
  },
  {
    path: 'excluir/:id',
    component: MensagemExcluirPensamentoComponent
  },
  {
    path: 'editar/:id',
    component: FormPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
