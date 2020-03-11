import { inject, bindable, customElement } from 'aurelia-framework';

@inject()
@customElement('order-detail')
export class OrderDetails {

  @bindable rows;
  @bindable columns;
  
  constructor() {  }

  attached(){
    console.log("rows: ", this.rows);
  }
}
