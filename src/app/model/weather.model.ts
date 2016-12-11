export class WeatherModel {
  weatherObservation:Object = {};
  message: string;
  constructor(values: Object={}) {
    Object.assign(this,values);
  }
}
