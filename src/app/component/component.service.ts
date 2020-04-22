import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  public postfromdashboard = new BehaviorSubject('');
  public postTotestModule = new Subject();
  constructor() { }
  sharePost(post){
    this.postfromdashboard.next(post);
  }
}
