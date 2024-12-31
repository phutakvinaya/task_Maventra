import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningplanComponent } from './learningplan.component';

describe('LearningplanComponent', () => {
  let component: LearningplanComponent;
  let fixture: ComponentFixture<LearningplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearningplanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
