import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  private pos1 = 0;
  private pos2 = 0;
  private pos3 = 0;
  private pos4 = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'position', 'fixed');
    this.renderer.setStyle(this.el.nativeElement, 'z-index', '9999');
    this.renderer.setStyle(this.el.nativeElement, 'touch-action', 'none');
  }

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  dragStart(event: any): void {
    event = event.touches ? event.touches[0] : event;
    this.pos3 = event.clientX;
    this.pos4 = event.clientY;
    document.onmouseup = this.closeDragElement;
    document.ontouchend = this.closeDragElement;
    document.onmousemove = this.elementDrag;
    document.ontouchmove = this.elementDrag;
  }

  elementDrag = (event: any): void => {
    event = event.touches ? event.touches[0] : event;
    this.pos1 = this.pos3 - event.clientX;
    this.pos2 = this.pos4 - event.clientY;
    this.pos3 = event.clientX;
    this.pos4 = event.clientY;
    this.el.nativeElement.style.top =
      this.el.nativeElement.offsetTop - this.pos2 + 'px';
    this.el.nativeElement.style.left =
      this.el.nativeElement.offsetLeft - this.pos1 + 'px';
  };

  closeDragElement = (): void => {
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchend = null;
    document.ontouchmove = null;
  };
}
