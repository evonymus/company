// Class supporting Rates of Exchange
export class RoeItem {
  roe: number = 0.0;
  currencyName: string = "";
  code: string = "";

  constructor(values: Object={}) {
    Object.assign(this, values);
  }
}
