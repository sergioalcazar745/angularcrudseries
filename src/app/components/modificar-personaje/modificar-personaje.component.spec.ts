import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPersonajeComponent } from './modificar-personaje.component';

describe('ModificarPersonajeComponent', () => {
  let component: ModificarPersonajeComponent;
  let fixture: ComponentFixture<ModificarPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
