import { Injectable } from '@angular/core';
import { AddressItem } from '../model/address-item.model';

@Injectable()
export class AddressService {

  getAddressList(): Address[] {
    return [
      new AddressItem({street:"Zielona", no:"42", house:"11", zip:"02-921", city:"Warszawa", country:"Polska"})
      , new AddressItem({street:"Dzika", no:"1", house:"31", zip:"12-921", city:"Olsztyn", country:"Polska"})
      , new AddressItem({street:"Smocza", no:"4", house:"1", zip:"40-511", city:"Zielona Góra", country:"Polska"})
      , new AddressItem({street:"Grunwaldzka", no:"42", house:"11", zip:"82-421", city:"Gdańsk", country:"Polska"})
      , new AddressItem({street:"Dobra", no:"45", house:"14", zip:"02-021", city:"Warszawa", country:"Polska"})
    ];
  }
}
