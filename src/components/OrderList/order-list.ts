import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';

@inject(Router)
export class OrderList {

  private rows: any[] = [];
  private columns: any[] = [];

  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor() { 
    this.columns = ["UserNmae", "Car Name", "Car Model", "Maintenance Type", "Return Date", "Car Color", "inspection"];
    let getStoredData = JSON.parse(localStorage.getItem(`order${this.currentUser}`)) 
    this.rows = getStoredData;
  }

  
}
