import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  SimpleChange,
} from "@angular/core";
import { ComponentService } from "../../component.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges) {
    console.log("something changd", changes);
    let numbervar = changes.numberToInput;
    if(numbervar.currentValue !== numbervar.previousValue){
      console.log('values changed');
    }
  }

  public userPost;
  public numberToInput1;
  constructor(public compService: ComponentService) {}

  @Input()
  set numberToInput(num:number) {
    this.numberToInput1 = num;
  }
  get numberToInput() {
    return this.numberToInput;
  }

  ngOnInit() {
    this.somefunction();
  }

  somefunction() {
    this.compService.postfromdashboard.subscribe((post) => {
      this.userPost = post;
      this.compService.postTotestModule.next(post);
    });
  }
}
