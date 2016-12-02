import { Component } from '@angular/core';
import { AddressItem } from '../../model/address-item.model';

@Component({
  selector: 'app-address-info',
  inputs: ['address'],
  templateUrl: './address-info.component.html'
})
export class AddressInfoComponent {
  addressItem: AddressItem;
}
