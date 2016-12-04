
export class AddressItem {
  street  : string;
  no      : string;
  house   : string;
  zip     : string;
  city    : string;
  country : string;

  constructor(values: Object={}) {
    Object.assign(this, values);
  }

  static getEmptyAddress() {
    return new AddressItem({street:"", no:"", house:"", zip:"", city:"", country:""});
  }
}
