import { Component, EventEmitter } from '@angular/core';
import { AddressItem } from '../../model/address-item.model';

@Component({
  selector    : 'app-address-list',
  inputs      : ['addressList' ],
  outputs     : ['onAddressSelected'],
  templateUrl : './address-list.component.html',
  styleUrls   : [ './address-list.component.css']
})
export class AddressListComponent {
  addressList       : AddressItem[];
  addressSelected   : AddressItem;
  onAddressSelected : EventEmitter<AddressItem>;

  constructor() {
    this.onAddressSelected = new EventEmitter();
  }

  onClick(addressItem: AddressItem) :void {
    this.addressSelected = addressItem;
    this.onAddressSelected.emit(addressItem);
  }
}
