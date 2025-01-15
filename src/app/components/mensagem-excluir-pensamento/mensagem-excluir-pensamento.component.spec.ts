import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemExcluirPensamentoComponent } from './mensagem-excluir-pensamento.component';

describe('MensagemExcluirPensamentoComponent', () => {
  let component: MensagemExcluirPensamentoComponent;
  let fixture: ComponentFixture<MensagemExcluirPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemExcluirPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagemExcluirPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
