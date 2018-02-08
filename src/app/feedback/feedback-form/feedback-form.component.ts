import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormData } from '../FormData';
@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {


  object = new FormData();


  @Output() out = new EventEmitter<any>();

  date: Date = new Date();


  // object = {
  //   name: '',
  //   mid: '',
  //   comment: '',
  //   date: new Date()
  // };



  feedbackForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      mid: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required]),
    }
  );

  get name() {
    return this.feedbackForm.get('name');
  }

  get mid() {
    return this.feedbackForm.get('mid');
  }

  get comment() {
    return this.feedbackForm.get('comment');
  }

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.object.name = this.name.value;
    this.object.mid = this.mid.value;
    this.object.comment = this.comment.value;
    const d = new Date();
    this.object.date = new Date();

    console.log(this.date);
    this.out.emit(this.object);
  }

  reset() {
    this.feedbackForm.reset();
  }

}
