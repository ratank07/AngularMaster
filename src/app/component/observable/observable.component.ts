import { Component, OnInit, OnDestroy } from '@angular/core';
import {interval, Observable} from 'rxjs'
import { map, filter } from 'rxjs/operators';
import { ActivatedRoute, Params } from "@angular/router";
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {
  public counter: any;
  countersub;
  public intervalobservable: any;
  constructor(public route: ActivatedRoute) { }
  counteraobs = Observable.create(observer => {
    let count = 0;
    setInterval(()=> {

      observer.next(count);
      if(count == 3) observer.complete()
      if(count > 4){
        observer.error(new Error('Count goes beyond 4'))
      } count ++;
    } ,1000)
  })
  ngOnInit(): void {
    this.route.queryParams.subscribe(param => console.log('aramslod',param))
    this.createCustomObservable()
  }
  createCustomObservable() {
    this.countersub = this.counteraobs.pipe(filter((data, i)=> { return (i==data) }),map((data:number, i)=> {return 'round  '+ i+' '+ +data++})).subscribe(count => this.counter = count
    , error=> {alert(error)}, ()=>console.log('comleted')
    );
  }
  ngOnDestroy() {
    this.countersub.unsubscribe()
    // this.intervalobservable.unsubscribe()
  }

}
