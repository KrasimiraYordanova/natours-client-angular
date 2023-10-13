import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-tour',
  templateUrl: './new-tour.component.html',
  styleUrls: ['./new-tour.component.scss']
})
export class NewTourComponent {

  constructor(private fb: FormBuilder) {}

  tourForm = this.fb.group({
    
  })

}
