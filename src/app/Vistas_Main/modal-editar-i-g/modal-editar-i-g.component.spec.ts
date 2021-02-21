import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarIGComponent } from './modal-editar-i-g.component';

describe('ModalEditarIGComponent', () => {
  let component: ModalEditarIGComponent;
  let fixture: ComponentFixture<ModalEditarIGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarIGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarIGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
