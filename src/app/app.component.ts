import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular - Field Level Security POC';
  subText = 'Privileges - READ, WRITE(READBLE&EDITABLE), PROTECTED';
  description = 'The label, textbox and text input displayed below are dynamically created based on received JSON API response. The input value of Project field is received as plain text from JSON and shown as masked character in display due to the protected flag received as response.'
  constructor() { }

  ngOnInit() {   
  }
}
