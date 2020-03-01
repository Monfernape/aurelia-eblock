import { MaintenanceType } from './maintenancetype';
import { CreateOrderModel } from './createorder-model';
import { Router } from 'aurelia-router';
import { inject } from 'aurelia-dependency-injection';

@inject(Router)
export class CreateOrder {

  private model;
  private selectedMaintenanceTypeObject: MaintenanceType = null;

  constructor(private router: Router){
    this.selectedMaintenanceTypeObject;
  }

  activate(){
    this.model = new CreateOrderModel();
  }

  bind(){
    // Defininig Model
    this.defineModel();
    // defining dropdowns
    this.defineMaintenanceTypeData();
  }

  defineModel(){
    this.model.cIsInspection = false;
  }

  defineMaintenanceTypeData(){
    this.model.ddMaintenanceTypeData = [
      {id: 1, option: "Tuning"},
      {id: 2, option: "Inspection"},
      {id: 3, option: "Brakes Service"},
      {id: 4, option: "Parts Replacement"}
    ];
  }

  selectedMaintenanceType(selectedOption){
    console.log("selectedOption: ", selectedOption);
  }

  onSubmit(){

  }

  onCancel(){
    
  }

}
