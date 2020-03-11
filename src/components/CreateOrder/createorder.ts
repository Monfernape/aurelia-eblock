import { OrderService } from './../../services/create-order.service';
import { MaintenanceType } from '../../models/maintenancetype';
import { CreateOrderModel } from '../../models/createorder-model';
import { Router } from 'aurelia-router';
import { inject } from 'aurelia-dependency-injection';

@inject(Router, OrderService)
export class CreateOrder {

  private model: CreateOrderModel;
  private selectedMaintenanceTypeObject: MaintenanceType = null;

  constructor(private router: Router, private orderService: OrderService) { }

  activate() {
    this.model = new CreateOrderModel();
  }

  // Defininig Model
  // Defining dropdowns
  bind() {
    this.defineModel();
    this.defineMaintenanceTypeData();
  }

  defineModel() {
    this.model.cIsInspection = false;
    this.model.dtExpectedReturnDate = new Date()
  }

  defineMaintenanceTypeData() {
    this.model.ddMaintenanceTypeData = [
      { id: 1, option: "Tuning" },
      { id: 2, option: "Inspection" },
      { id: 3, option: "Brakes Service" },
      { id: 4, option: "Parts Replacement" }
    ];
  }

  createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  handleCreateOrder() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let obj = {
      id: this.createUUID(), userName: currentUser, carName: this.model.iCarName, carModel: this.model.iCarModel, maintenanceType: this.selectedMaintenanceTypeObject.option,
      returnDate: this.model.dtExpectedReturnDate, carColor: this.model.iCarColor, isInspection: this.model.cIsInspection
    };
    let data = [];
    data.push(obj);
    this.orderService.setOrder(data);
  }

  onCancel() {

  }

}
