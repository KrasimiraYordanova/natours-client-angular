import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AgePipe } from './pipes/age.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    AgePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    AgePipe
  ]
})
export class SharedModule { }
