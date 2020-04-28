import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ComponentService } from "../component.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  public numberToInput: number = 90;
  public postvar;
  constructor(public compService: ComponentService, public router: Router, public actiroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.compService.postfromdashboard.next(this.postvar);
    this.actiroute.queryParams.subscribe(param=> console.log('log',param)
    )
  }
  sendPost(postvar: NgForm) {
    console.log("loging form", postvar.value.postvar);
    this.compService.sharePost(postvar.value.postvar);
  }
  set NumberToinput(num: number) {
    this.numberToInput = num;
  }
  get NumberToinput() {
    return this.numberToInput;
  }
  increment() {
    this.numberToInput++;
  }
  decrement() {
    this.numberToInput--;
  }
  Observableparams() {
    this.router.navigate(["./dashboard"], { queryParams: { dashparam: 20, dashparam2:40 } });
  }
}
