import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTransferenciaComponent } from './modal-transferencia.component';

describe('ModalTransferenciaComponent', () => {
  let component: ModalTransferenciaComponent;
  let fixture: ComponentFixture<ModalTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTransferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
