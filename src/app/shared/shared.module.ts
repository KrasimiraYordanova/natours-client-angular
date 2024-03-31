import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AgePipe } from './pipes/age.pipe';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';



@NgModule({
  declarations: [
    LoaderComponent,
    AgePipe,
    FileUploaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    AgePipe,
    FileUploaderComponent
  ]
})
export class SharedModule { }
