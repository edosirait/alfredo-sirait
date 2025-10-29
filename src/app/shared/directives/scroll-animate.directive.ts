import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[scrollAnimate]',
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  @Input() animationType: 'fade-in' | 'slide-in' = 'fade-in';
  @HostBinding('class.animate-visible') isVisible = false;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.classList.add(this.animationType);
    this.setupObserver();
  }

  setupObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            this.observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }
}
