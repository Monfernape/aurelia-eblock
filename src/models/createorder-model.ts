import { MaintenanceType } from './maintenancetype';

export class CreateOrderModel {
  id: string;
  userName: string;
  iCarName: string;
  iCarModel: string;
  cIsInspection: boolean;
  ddMaintenanceTypeData: MaintenanceType[];
  dtExpectedReturnDate: Date;
  iCarColor: string;
}
