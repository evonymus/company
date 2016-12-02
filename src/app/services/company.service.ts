import { Injectable } from '@angular/core';
import { AddressItem } from '../model/address-item.model';
import { CompanyItem } from '../model/company-item.model';

@Injectable()
export class CompanyService {

  getCompanyList(): CompanyItem[] {
    return [
      new CompanyItem({name:"Bio-Agro"
      , nameLong:"Bio-Agro Sp. z.o.o"
      , nip:"792-823-32-21"
      , address:new AddressItem({street:"Smocza", no:"2", house:"1", zip:"01-072", city:"Warszawa", country:"Poland"})
      }),
      new CompanyItem({name:"Maersk"
      , nameLong:"Maersk Line Polska sp. z o.o"
      , nip:"591-823-32-21"
      , address:new AddressItem({street:"Puławska", no:"2", house:"1", zip:"01-072", city:"Warszawa", country:"Poland"})
      }),
      new CompanyItem({name:"Syncron"
      , nameLong:"Syncron Polska sp. z o.o "
      , nip:"811-823-32-21"
      , address:new AddressItem({street:"Swietokrzyska", no:"2", house:"1", zip:"01-072", city:"Warszawa", country:"Poland"})
      })
    ];
  }
}
