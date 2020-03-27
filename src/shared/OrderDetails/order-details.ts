import { inject, bindable, customElement } from 'aurelia-framework';

@inject()
@customElement('order-detail')
export class OrderDetails {

  @bindable rows;
  @bindable columns;
  @bindable viewOrder;
  
  constructor() {  }

  attached(){
    console.log("rows: ", this.rows);
  }

  onRowSelection(selectedRow){
    console.log("selectedRow:", selectedRow);
    this.viewOrder({selectedRow: selectedRow})
  }
}
