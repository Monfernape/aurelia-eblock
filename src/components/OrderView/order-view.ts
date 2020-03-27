import { OrderService } from './../../services/create-order.service';
import { CreateOrderModel } from './../../models/createorder-model';
import { Router } from 'aurelia-router';
import { inject } from 'aurelia-dependency-injection';

@inject(Router, OrderService)
export class orderView {

  private model: CreateOrderModel;
  private id;

  constructor(private router: Router, private orderService: OrderService) { }

  activate(params, routeConfig) {
    this.model = new CreateOrderModel();
    this.id = params.id;
    this.defineModel();
  }

  defineModel() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.orderService.getDataById(this.id, currentUser).then((res: any) => {
      let keys = Object.keys(res)
      keys.forEach(element => {
        try {
          this.model[element] = res[element];
        }
        catch (err) {
          console.log("err:", err);
        }
      });
    })
  }
}
