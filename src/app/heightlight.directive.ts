import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeightlight]'
})
export class HeightlightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
