import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Options } from 'src/app/shared/interfaces/modal-options';
import { Observable, fromEvent, zip } from 'rxjs';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {

  @ViewChild('modal') modal!: ElementRef<HTMLDivElement>;
  @ViewChild('overlay') overlay!: ElementRef<HTMLDivElement>;

  options!: Options | undefined;
  modalAnimationEnd!: Observable<Event>;
  modalLeaveAnimation!: string;
  overlayLeaveAnimation!: string;
  overlayAnimationEnd!: Observable<Event>;
  modalLeaveTiming!: number;
  overlayLeaveTiming!: number;

  constructor(
    private modalService: ModalService,
    private element: ElementRef
  ) {}

  @HostListener('document: keydown.escape')
  onEscape() {
    // closing modal on escape
    this.modalService.close();
  }

  onClose() {
    // Closing the modal when clicking on the overlay
    this.modalService.close();
  }

  ngAfterViewInit(): void {
    this.options = this.modalService.options;
    this.addOptions();
    this.addEnterAnimations();
  }

  addEnterAnimations() {
    this.modal.nativeElement.style.animation = this.options?.animations?.modal?.enter || '';
    this.overlay.nativeElement.style.animation = this.options?.animations?.overlay?.enter || '';
  }

  addOptions() {
    // Applying desired styles
    this.modal.nativeElement.style.minWidth = this.options?.size?.minWidth || 'auto';
    this.modal.nativeElement.style.width = this.options?.size?.width || 'auto';
    this.modal.nativeElement.style.maxWidth = this.options?.size?.maxWidth || 'auto';

    this.modal.nativeElement.style.minHeight = this.options?.size?.minHeight || 'auto';
    this.modal.nativeElement.style.height = this.options?.size?.height || 'auto';
    this.modal.nativeElement.style.maxHeight = this.options?.size?.maxHeight || 'auto';


    // Storing ending animation in variables
    this.modalLeaveAnimation = this.options?.animations?.modal?.leave || '';
    this.overlayLeaveAnimation = this.options?.animations?.overlay?.leave || '';
    // Adding an animation event listener to know when animations ends
    this.modalAnimationEnd = this.animationendEvent(this.modal.nativeElement);
    this.overlayAnimationEnd = this.animationendEvent(this.overlay.nativeElement);
    // Get to know how long animations are
    this.modalLeaveTiming = this.getAnimationTime(this.modalLeaveAnimation);
    this.overlayLeaveTiming = this.getAnimationTime(this.overlayLeaveAnimation);
  }

  animationendEvent(element: HTMLDivElement) {
    return fromEvent(element, 'animationend')
  }

  getAnimationTime(animation: string) {
    let animationTime = 0;
    const splittedAnimation = animation.split(' ');
    for (const expression of splittedAnimation) {
      const currentValue = +expression.replace(/s$/, '');
      if(!isNaN(currentValue)) {
        animationTime = currentValue;
        break;
      }
    }

    return animationTime;
  }

  removeElementIfNoAnimation(element: HTMLDivElement, animation: string) {
    if(!animation) {
      element.remove();
    }
  }

  close() {
    this.modal.nativeElement.style.animation = this.modalLeaveAnimation;
    this.overlay.nativeElement.style.animation = this.overlayLeaveAnimation;

    // The goal here is to clean up the DOM to not keep unnecessary <app-modal> element
    // No animations on both elements
    if(!this.options?.animations?.modal?.leave && !this.options?.animations?.overlay?.leave) {
      this.modalService.options = undefined;
      this.element.nativeElement.remove();
      return;
    }

    // Remove element if not animated
    this.removeElementIfNoAnimation(this.modal.nativeElement, this.modalLeaveAnimation);
    this.removeElementIfNoAnimation(this.overlay.nativeElement, this.overlayLeaveAnimation);

    // Both elements are animated, remove modal as soon as longest ine ends
    if(this.modalLeaveTiming > this.overlayLeaveTiming) {
      this.modalAnimationEnd.subscribe(() => {
        this.element.nativeElement.remove();
      });
    } else if (this.modalLeaveTiming < this.overlayLeaveTiming) {
      this.overlayAnimationEnd.subscribe(() => {
        this.element.nativeElement.remove();
      })
    } else {
      zip(this.modalAnimationEnd, this.overlayAnimationEnd).subscribe(() => {
        this.element.nativeElement.remove();
      });
    }

    this.modalService.options = undefined;
  }
}
