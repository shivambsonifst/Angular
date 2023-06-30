import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  setColor = "Red";
  @Input() appHighlight = '';

  constructor(private el: ElementRef) { }

  

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'red');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
