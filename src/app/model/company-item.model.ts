import {AddressItem } from './address-item.model';

export class CompanyItem {
  name: string;
  nameLong: string;
  nip: string;
  address: Address;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
