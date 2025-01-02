import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appInView]',
  standalone: true
})
export class InViewDirective {
  @Output() inView: EventEmitter<boolean> = new EventEmitter<boolean>();

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.inView.emit(entry.isIntersecting);
      },
      {
        threshold: 0.1 // Trigger when 10% of the element is visible
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

