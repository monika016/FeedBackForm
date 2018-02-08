import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-comments',
  templateUrl: './feedback-comments.component.html',
  styleUrls: ['./feedback-comments.component.css']
})
export class FeedbackCommentsComponent implements OnInit {

  @Input() object;
  constructor() {
    console.log(this.object);
   }

  ngOnInit() {
    console.log(this.object);
  }

}
