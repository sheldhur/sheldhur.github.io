import {Directive, ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[appImgLoadingSpinner]'
})
export class ImgLoadingSpinnerDirective {
  private CLASS_NAME_LOADING = 'loading';
  private CLASS_NAME_IS_LOAD = 'is-load';
  private CLASS_NAME_IS_ERROR = 'is-error';

  @HostListener('load', ['$event']) loadingStart(event) {
    this.replaceClass(event.target, this.CLASS_NAME_LOADING, this.CLASS_NAME_IS_LOAD);
  }

  @HostListener('error', ['$event']) loadingError(event) {
    this.replaceClass(event.target, this.CLASS_NAME_LOADING, this.CLASS_NAME_IS_ERROR);
  }

  constructor(private el: ElementRef) {
    setTimeout(() => {
      const {classList} = el.nativeElement;
      if (el && classList && !classList.contains(this.CLASS_NAME_IS_LOAD) && !classList.contains(this.CLASS_NAME_IS_ERROR)) {
        classList.add(this.CLASS_NAME_LOADING);
      }
    }, 32);
  }

  replaceClass(element: HTMLElement, remove, add): void {
    const {classList} = element;
    classList.remove(remove);
    classList.add(add);
  }
}
