import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class InfoWebService {
  private ip_url: string = "http://freegeoip.net/json/";

  constructor(private http: Http) {
  }

  getIpInfo() {
   return this.http.get(this.ip_url)
    .flatMap((response: Response)=> response.json());
  }

}
