export class MenuItem {
  name: string;
  loc : string[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
