import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFormPokemonComponent } from './add-edit-form-pokemon.component';

describe('AddEditFormPokemonComponent', () => {
  let component: AddEditFormPokemonComponent;
  let fixture: ComponentFixture<AddEditFormPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditFormPokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditFormPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
