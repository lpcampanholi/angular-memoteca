import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { CardPensamentoComponent } from './components/card-pensamento/card-pensamento.component';
import { FormPensamentoComponent } from './components/form-pensamento/form-pensamento.component';
import { ListaPensamentosComponent } from './components/lista-pensamentos/lista-pensamentos.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { ModalExcluirPensamentoComponent } from './components/modal-excluir-pensamento/modal-excluir-pensamento.component';
import { ModalEditarPensamentoComponent } from './components/modal-editar-pensamento/modal-editar-pensamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    FormPensamentoComponent,
    ListaPensamentosComponent,
    CardPensamentoComponent,
    ModalExcluirPensamentoComponent,
    ModalEditarPensamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
