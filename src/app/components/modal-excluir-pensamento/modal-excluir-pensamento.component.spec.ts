import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirPensamentoComponent } from './modal-excluir-pensamento.component';

describe('ModalExcluirPensamentoComponent', () => {
  let component: ModalExcluirPensamentoComponent;
  let fixture: ComponentFixture<ModalExcluirPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExcluirPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExcluirPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
