import { Component, Input, OnChanges} from '@angular/core';
import { WeatherModel } from '../../model/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnChanges {
  @Input() weather:WeatherModel ;

  constructor() {

  }

  ngOnChanges() {
    console.log("WTH", this.weather);
    console.log("TMP", this.weather.weatherObservation);
  }

}
