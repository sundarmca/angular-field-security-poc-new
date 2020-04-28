import { Component, OnInit } from '@angular/core';
import { ForminputService } from './../forminput.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-tbl',
  templateUrl: './data-tbl.component.html',
  styleUrls: ['./data-tbl.component.css']
})
export class DataTblComponent implements OnInit {
  results = [];

  formTitle = 'JSON response loaded to Data Table';
  constructor(private dtable: ForminputService) { 
  }

  ngOnInit() {
    this.getDataItems();
  }

  fetchFromService(){
    return this.dtable.getData();
  }

  getDataItems(): void {
    this.fetchFromService()
    .subscribe((data: any): void => { 
        this.results = data.searchdata;
    });
  }

  onEditInit(event): void {
  }

  onEditCancel():void {
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