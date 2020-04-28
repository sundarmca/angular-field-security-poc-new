import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface formApiResponse {
  searchdata: {
    label, name, team, project, inputval, property: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class ForminputService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<formApiResponse>('/assets/data.json');
  }

}