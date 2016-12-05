export class NbpRoeItem {
  effectiveDate:string;
  no:string;
  rates: {code:string, currency: string, mid:number}[];
  table:string;

  constructor(values: Object={}) {
    Object.assign(this, values);
  }
}
