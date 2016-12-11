import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const  URL_WEATH: string='http://api.geonames.org/findNearByWeatherJSON?'
const  USER: string = 'evonymus';

@Injectable()
export class GeonamesService {

  constructor(private http: Http) { }

  // function return information about weather basing on lat,lng info
  getGeoWeather(lat:number, lng:number) {
    return this.http.get(URL_WEATH + 'lat=' + lat+'&lng=' + lng + '&username=' + USER)
    .map((response:Response) => response.json());
  }

}
