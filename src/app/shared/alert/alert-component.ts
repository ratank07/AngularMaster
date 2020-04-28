import { Component , Input, Output, EventEmitter} from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-alert',
  templateUrl:'./alert.component.html',
  styleUrls:['./alert.component.css']
})
export class alertComponent {
  @Input() message;
  @Output() close = new EventEmitter<void>()

  onCloseAlert() {
    this.close.emit()
  }
}
