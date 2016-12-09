/* the class gives information about IP address */

export class IpInfoModel {
  city: string;
  country_code: string;
  country_name: string;
  ip:string;
  latitude:number;
  longitude:number;
  metro_code: string;
  region_code: string;
  region_name: string;
  time_zone: string;
  zip_code:string;

  constructor(values: Object = {}) {
    Object.assign(this,values);
  }
}
