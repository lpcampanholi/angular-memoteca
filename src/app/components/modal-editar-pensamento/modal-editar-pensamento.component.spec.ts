import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarPensamentoComponent } from './modal-editar-pensamento.component';

describe('ModalEditarPensamentoComponent', () => {
  let component: ModalEditarPensamentoComponent;
  let fixture: ComponentFixture<ModalEditarPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
