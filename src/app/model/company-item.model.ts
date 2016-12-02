import {AddressItem } from './address-item.model';

export class CompanyItem {
  public name: string;
  public nameLong: string;
  public nip: string;
  public address: AddressItem;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
