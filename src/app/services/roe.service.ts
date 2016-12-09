import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NbpRoeItem } from '../model/nbp-roe-item.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class RoeService {
  // url:string='https://api.github.com/users';
  url:string='http://api.nbp.pl/api/exchangerates/tables/A/';
  format:string='?format=json';

  constructor(private http: Http) {
  }

  getRoeList()  {
    return this.http.get(this.url + this.format)
    .flatMap((response: Response) => response.json());
  }

  getRoeListForDate(date:Date)  {
    return this.http.get(this.url + date + '/' +  this.format)
    .flatMap((response: Response) => response.json())
  }

  private handleError(error: Response) {
    console.log("SERVER ERROR OCCURED");
    console.error(error);
    return Observable.throw(error.json().error || 'server error');
  }


}
