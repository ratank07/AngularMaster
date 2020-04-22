import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  public enteredTitle = '';
  public enteredContent = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(form:NgForm) {
    if(form.invalid) {
      return;
    }
    console.log('form vlaue', form.value);
  }

}
