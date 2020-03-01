import { MaintenanceType } from '../../models/maintenancetype';
import { CreateOrderModel } from '../../models/createorder-model';
import { Router } from 'aurelia-router';
import { inject } from 'aurelia-dependency-injection';

@inject(Router)
export class CreateOrder {

  private model: CreateOrderModel;
  private selectedMaintenanceTypeObject: MaintenanceType = null;

  constructor(private router: Router) { }

  activate(){
    this.model = new CreateOrderModel();
  }

  // Defininig Model
  // defining dropdowns
  bind(){
    this.defineModel();
    this.defineMaintenanceTypeData();
  }

  defineModel(){
    this.model.cIsInspection = false;
    this.model.dtExpectedReturnDate = new Date()
  }

  defineMaintenanceTypeData(){
    this.model.ddMaintenanceTypeData = [
      {id: 1, option: "Tuning"},
      {id: 2, option: "Inspection"},
      {id: 3, option: "Brakes Service"},
      {id: 4, option: "Parts Replacement"}
    ];
  }

  handleCreateOrder(){

  }

  onCancel(){
    
  }

}
