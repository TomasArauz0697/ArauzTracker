import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarCuentaComponent } from './modal-editar-cuenta.component';

describe('ModalEditarCuentaComponent', () => {
  let component: ModalEditarCuentaComponent;
  let fixture: ComponentFixture<ModalEditarCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
