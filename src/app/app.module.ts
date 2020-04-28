import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ForminputService } from './forminput.service';
import { FieldInputsComponent } from './field-inputs/field-inputs.component';
import { InputComponent } from './input/input.component';
import { DataTblComponent } from './data-tbl/data-tbl.component';
import {TableModule} from 'primeng/table';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, TableModule ],
  declarations: [ AppComponent, FieldInputsComponent, InputComponent, DataTblComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ForminputService]
})
export class AppModule { }
