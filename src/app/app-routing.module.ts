import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormPensamentoComponent } from './components/form-pensamento/form-pensamento.component';
import { ListaPensamentosComponent } from './components/lista-pensamentos/lista-pensamentos.component';
import { ModalEditarPensamentoComponent } from './components/modal-editar-pensamento/modal-editar-pensamento.component';
import { ModalExcluirPensamentoComponent } from './components/modal-excluir-pensamento/modal-excluir-pensamento.component';

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
    component: ModalExcluirPensamentoComponent
  },
  {
    path: 'editar/:id',
    component: ModalEditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
