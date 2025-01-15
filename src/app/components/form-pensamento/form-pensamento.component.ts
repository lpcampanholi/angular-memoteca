import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from 'src/app/interfaces/pensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-form-pensamento',
  templateUrl: './form-pensamento.component.html',
  styleUrls: ['./form-pensamento.component.css']
})
export class FormPensamentoComponent implements OnInit {

  formulario!: FormGroup;
  pensamentoId: number | null = null;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pensamentoId = parseInt(id, 10);
      this.carregarPensamento(this.pensamentoId);
    }
  }

  inicializarFormulario(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/) //caracteres vazios
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3) // mínimo 3 caracteres
      ])],
      modelo: ['modelo1'],
      favorito: [false]
    })
  }

  submeterFormulario(): void {
    if (this.formulario.valid) {
      if (this.pensamentoId) {
        this.atualizarPensamento();
      } else {
        this.criarPensamento();
      }
    }
  }

  carregarPensamento(id: number): void {
    this.service.buscarPorId(id).subscribe((pensamento) => {
      this.formulario.patchValue(pensamento);
    });
  }

  criarPensamento(): void {
    const novoPensamento: Pensamento = this.formulario.value;
    this.service.criar(novoPensamento).subscribe(() => {
      this.router.navigate(['/listar']);
    });
  }

  atualizarPensamento(): void {
    const pensamentoAtualizado: Pensamento = {
      id: this.pensamentoId!,
      ...this.formulario.value,
    };
    this.service.editar(pensamentoAtualizado).subscribe(() => {
      this.router.navigate(['/listar']);
    })
  }

  cancelar(): void {
    this.router.navigate(['/listar']);
  }

  habilitarBotao(): string {
    return this.formulario.valid ? 'botao' : 'botao__desabilitado';
  }

}
