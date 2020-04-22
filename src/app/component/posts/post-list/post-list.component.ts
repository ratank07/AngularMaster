import { Component, OnInit } from '@angular/core';
import { ComponentService } from "../../component.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public userPost;
  constructor(public compService: ComponentService) { }

  ngOnInit() {

    this.somefunction()
  }

  somefunction(){
      this.compService.postfromdashboard.subscribe(post => {
    this.userPost = post;
    this.compService.postTotestModule.next(post);
  });
  }


}
