import { Directive, ElementRef, Renderer2 } from "@angular/core";
@Directive({
  selector: ".cardHover"
})

export class cardHowerDIrective {
  constructor(public el : ElementRef, public renderer: Renderer2) {

      // renderer.setElementStyle
    el.nativeElement.style.backgroundColor = 'gray'

  }
}
