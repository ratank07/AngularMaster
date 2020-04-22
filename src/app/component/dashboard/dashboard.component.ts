import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentService } from "../component.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public postvar;
  constructor(public compService: ComponentService) { }

  ngOnInit(): void {
    this.compService.postfromdashboard.next(this.postvar)
  }
  sendPost(postvar: NgForm) {
    console.log('loging form', postvar.value.postvar);
    this.compService.sharePost(postvar.value.postvar);
  }

}
