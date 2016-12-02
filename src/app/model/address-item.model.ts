
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

}
