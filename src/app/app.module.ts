import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { CardPensamentoComponent } from './components/card-pensamento/card-pensamento.component';
import { FormPensamentoComponent } from './components/form-pensamento/form-pensamento.component';
import { ListaPensamentosComponent } from './components/lista-pensamentos/lista-pensamentos.component';
import { ModalEditarPensamentoComponent } from './components/modal-editar-pensamento/modal-editar-pensamento.component';
import { MensagemExcluirPensamentoComponent } from './components/mensagem-excluir-pensamento/mensagem-excluir-pensamento.component';
import { RodapeComponent } from './components/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    FormPensamentoComponent,
    ListaPensamentosComponent,
    CardPensamentoComponent,
    MensagemExcluirPensamentoComponent,
    ModalEditarPensamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
