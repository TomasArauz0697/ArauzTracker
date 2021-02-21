import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsNuevaCuentaComponent } from './modals-nueva-cuenta.component';

describe('ModalsNuevaCuentaComponent', () => {
  let component: ModalsNuevaCuentaComponent;
  let fixture: ComponentFixture<ModalsNuevaCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsNuevaCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsNuevaCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
