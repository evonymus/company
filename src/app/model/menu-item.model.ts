export class MenuItem {
  name: string;
  url : string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
