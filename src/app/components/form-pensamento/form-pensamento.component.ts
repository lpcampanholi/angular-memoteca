import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-form-pensamento',
  templateUrl: './form-pensamento.component.html',
  styleUrls: ['./form-pensamento.component.css']
})
export class FormPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/) //caracteres vazios
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3) // mínimo 3 caracteres
      ])],
      modelo: ['modelo1']
    })
  }

  criarPensamento() {
    console.log(this.formulario.get('autoria')?.errors);
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listar']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listar']);
  }

  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }

}
