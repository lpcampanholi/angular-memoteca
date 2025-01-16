import { Component, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/interfaces/pensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-lista-pensamento',
  templateUrl: './lista-pensamentos.component.html',
  styleUrls: ['./lista-pensamentos.component.css']
})
export class ListaPensamentosComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  deveListarFavoritos: boolean = false;
  titulo: string = "Meu Mural";

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.listarTodosPensamentos();
  }

  listarTodosPensamentos(): void {
    this.titulo = "Meu Mural";
    this.deveListarFavoritos = false;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.deveListarFavoritos)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  carregarMaisPensamentos(): void {
    this.service.listar(++this.paginaAtual, this.filtro, this.deveListarFavoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos.push(...listaPensamentos);
      if (!listaPensamentos.length) {
        this.haMaisPensamentos = false;
      }
    })
  }

  pesquisarPensamentos(): void {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.deveListarFavoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    })
  }

  listarFavoritos(): void {
    this.titulo = "Favoritos";
    this.deveListarFavoritos = true;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.deveListarFavoritos)
      .subscribe((listasPensamentosFavoritos) => {
        this.listaPensamentos = listasPensamentosFavoritos;
      });
  }

  aoFavoritoAtualizado(pensamento: Pensamento) {
    if (this.deveListarFavoritos && !pensamento.favorito)
      this.listaPensamentos.splice(this.listaPensamentos.indexOf(pensamento), 1);
  }

}
