import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  disabledControl = false;

  form = new FormGroup({
    name: new FormControl('Angular 5')
  });

  disableControl() {
    this.disabledControl = !this.disabledControl;
  }
}
