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
  cols = [];

  formTitle = 'JSON response loaded to Data Table';
  constructor(private dtable: ForminputService) { 
    this.cols = [
        { header: "Name", field: "name" },
        { header: "Team", field: "team" },
        { header: "Project", field: "project" }
    ];
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
        data.searchdata.forEach((elem) => {
          if (this.protectAccess(elem.property)) {
             elem.name = this.maskElem(elem.name);
             elem.team = this.maskElem(elem.team);
             elem.project = this.maskElem(elem.project);
             elem['editable']= false;
          } else if (this.readAccess(elem.property)) {
            elem['editable']= false;
          } else {
             elem['editable']= true;
          }
        });
        this.results = data.searchdata;
          console.log(":::::::");
          console.log(this.results);
          console.log(":::::::");
    });
  }

  onEditInit(event): void {
  }

  onEditCancel():void {
  }

  protectAccess(attr: any) {
    if (attr === 'protected') {
      return true;
    }
  }

  readAccess(attr: any) {
    if (attr === 'read') {
      return true;
    }
  }

  maskElem(val: any) {
      return "*".repeat(val.length);
  }
}