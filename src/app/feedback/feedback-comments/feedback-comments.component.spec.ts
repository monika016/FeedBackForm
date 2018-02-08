import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';
import { FeedbackCommentsComponent } from './feedback-comments.component';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';

describe('FeedbackCommentsComponent', () => {
  let component: FeedbackCommentsComponent;
  let fixture: ComponentFixture<FeedbackCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackCommentsComponent, FeedbackFormComponent],
      imports:[ReactiveFormsModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
