import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPersonaFormComponent } from './add-edit-persona-form.component';

describe('AddEditPersonaFormComponent', () => {
  let component: AddEditPersonaFormComponent;
  let fixture: ComponentFixture<AddEditPersonaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditPersonaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPersonaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
