import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {

  fileName = '';

  constructor(private httpClient: HttpClient) {}

  onFileSelected(event:Event) {
    console.log(event);
  }

}
