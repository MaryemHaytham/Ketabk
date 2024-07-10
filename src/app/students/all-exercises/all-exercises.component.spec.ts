import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExercisesComponent } from './all-exercises.component';

describe('AllExercisesComponent', () => {
  let component: AllExercisesComponent;
  let fixture: ComponentFixture<AllExercisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllExercisesComponent]
    });
    fixture = TestBed.createComponent(AllExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
