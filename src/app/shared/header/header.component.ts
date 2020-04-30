import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { alertComponent } from "../alert/alert-component";
import { PlaceholderDirective } from "../placeholder/placeholder.directive";
import { Subscription} from "rxjs";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild(PlaceholderDirective, {static:false}) alertHost: PlaceholderDirective;
  public colseAlert: Subscription;
  public message = 'this is alert box';
  constructor(public componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.showingAlert()
  }

  showingAlert() {
    var factAlertCom = this.componentFactoryResolver.resolveComponentFactory(alertComponent)
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear()

    const alertComp = hostViewContainerRef.createComponent(factAlertCom);
    alertComp.instance.message = 'message';
    this.colseAlert = alertComp.instance.close.subscribe(()=>{
        this.colseAlert.unsubscribe()
        hostViewContainerRef.clear()
    })
  }
  CloseAlert() {
    console.log('close called');

    this.message = null;
  }
}
