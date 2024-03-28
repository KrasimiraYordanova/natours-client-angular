import { ApplicationRef, ComponentRef, EnvironmentInjector, Injectable, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { Options } from '../shared/interfaces/modal-options';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  // Create a reference to our modal component
  newComponentModal!: ComponentRef<ModalComponent>;
  // Optionzl content passed at the creation: animation, size, ...
  options!: Options | undefined;

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) { }

  open(
    viewContainerRefOrComponent: ViewContainerRef,
    content: TemplateRef<Element>,
    options?: Options
    ): void;

  open<C>(
    viewContainerRefOrComponent: ViewContainerRef | Type<C>,
    templateContent?: TemplateRef<Element> | Options, options?: Options) {
      if(viewContainerRefOrComponent instanceof ViewContainerRef) {
        this.openWithTemplate(viewContainerRefOrComponent, templateContent as TemplateRef<Element>);
        this.options = options;
      }
    }

  private openWithTemplate(viewContainerRefOrComponent: ViewContainerRef, content: TemplateRef<Element>) {
    // We first start to clear previous views
    viewContainerRefOrComponent.clear();
    // We create a view with the template content
    const innerContent = viewContainerRefOrComponent.createEmbeddedView(content);

    // We create the modal component, 
    // and project the template content in the ng-content of the modal component
    this.newComponentModal = viewContainerRefOrComponent.createComponent(ModalComponent, {
      environmentInjector: this.injector,
      projectableNodes: [innerContent.rootNodes],
    });
  }

  close() {
    this.newComponentModal.instance.close();
  }
}
