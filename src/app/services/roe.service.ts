import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NbpRoeItem } from '../model/nbp-roe-item.model';

@Injectable()
export class RoeService {
  data: NbpRoeItem[];

  constructor(public http: Http) {
    console.log("Roe Service created");
    this.http.request('http://api.nbp.pl/api/exchangerates/tables/A/?format=json').subscribe((res: Response) => {
      this.data =<NbpRoeItem[]> res.json();
    });
      console.log(this.data);
  }

  getRoeList() : NbpRoeItem[] {
     return this.data;
  }


}