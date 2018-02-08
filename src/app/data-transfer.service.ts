import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataTransferService {




  constructor(private _http: HttpClient) { }

  getData(data) {
    return this._http.get(data);
  }



}
