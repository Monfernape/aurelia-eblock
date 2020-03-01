import { MaintenanceType } from './maintenancetype';

export class CreateOrderModel {
  iCarName: string;
  iCarModel: string;
  cIsInspection: boolean;
  ddMaintenanceTypeData: MaintenanceType[];
  dtExpectedReturnDate: Date;
  iCarColor: string;
}
