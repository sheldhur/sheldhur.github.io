import {Directive, HostListener, Input} from '@angular/core';
import Popper from 'popper.js';

@Directive({
  selector: '[appImgPreview]',
})
export class ImgPreviewDirective {
  private CONTAINER_ID = 'img-preview-popup';
  public container: HTMLElement;
  private popper: Popper;

  @Input() previewSrc: string;
  @Input() previewClass: string;

  @HostListener('mouseenter', ['$event']) showPreview(event) {
    this.container.innerHTML = `<img src="${this.previewSrc}">`;
    this.container.classList.add('show');
    this.popper = new Popper(event.target, this.container, {
      placement: 'right',
    });
  }

  @HostListener('mouseleave') hidePreview() {
    this.container.classList.remove('show');
  }

  constructor() {
    this.container = this.getContainer() || this.createContainer();
  }

  private createContainer(): HTMLElement {
    const container = document.createElement('div');
    container.id = this.CONTAINER_ID;
    const ref = document.body.appendChild(container);
    ref.addEventListener('webkitAnimationEnd', () => {
      if (this.popper && !ref.classList.contains('show')) {
        this.popper.destroy();
      }
    });

    return container;
  }

  private getContainer(): HTMLElement {
    return document.getElementById(this.CONTAINER_ID);
  }
}
