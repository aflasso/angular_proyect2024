import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFormObjetoComponent } from './add-edit-form-objeto.component';

describe('AddEditFormObjetoComponent', () => {
  let component: AddEditFormObjetoComponent;
  let fixture: ComponentFixture<AddEditFormObjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditFormObjetoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditFormObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
