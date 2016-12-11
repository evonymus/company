//information about location

export class LocModel {
  lat:number;
  lng: number;

  constructor(values: Object={}) {
    Object.assign(this,values);
  }
}
