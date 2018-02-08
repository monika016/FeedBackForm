import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormData } from './FormData';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  dataB: any[] = [];

  dataO = {
    name: '',
    mid: '',
    comment: '',
  };



  constructor() { }

  ngOnInit() {
    console.log(this.dataB);
  }

  out(data) {
    if (data.name !== '' || data.mid !== '' || data.comment !== '') {
      console.log('data');
      console.log(data );
      const form = new FormData();
      form.name = data.name;
      form.comment = data.comment;
      form.mid = data.mid;
      form.date = data.date;
      this.dataB.unshift(form);
    }
  }



}
