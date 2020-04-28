import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ForminputService } from './../forminput.service';

@Component({
  selector: 'app-field-inputs',
  templateUrl: './field-inputs.component.html',
  styleUrls: ['./field-inputs.component.css']
})
export class FieldInputsComponent implements OnInit {
  resultset = [];
  formTitle = 'JSON response loaded to form';

  constructor(private config: ForminputService) { }

  ngOnInit() {
    this.config.getData()
      .subscribe((data: any) => {
        this.resultset = data.searchdata;
      })
  }

  checkAccess(attr: any) {
      if (attr === 'read' || attr === 'protected') {
        return true;
      }
  }

  checkDisp(val: any, prop = null) {
    if (prop === 'protected') {
      return "*".repeat(val.length)
    } else {
      return val;
    }
  }
}