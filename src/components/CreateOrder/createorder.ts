import { CreateOrderModel } from './createorder-model';
import { Router } from 'aurelia-router';
import { inject } from 'aurelia-dependency-injection';

@inject(Router)
export class CreateOrder {

  private model;
  private selectedMaintenanceTypeId: number;

  constructor(private router: Router){
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
    this.selectedMaintenanceTypeId = null;
  }

  selectedMaintenanceType(selectedOption){
    console.log("selectedOption: ", selectedOption);
  }

}
