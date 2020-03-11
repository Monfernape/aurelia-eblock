import { inject } from 'aurelia-dependency-injection';
import {RouterConfiguration, Router} from 'aurelia-router';
import { PLATFORM } from "aurelia-framework";

@inject(RouterConfiguration, Router)
export class App {
  router: Router;
  public message: string = 'Garage';

  constructor(private menuItems: any){
  }

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = "E-Block"
    config.options.pushState = true;
    config.map([
      { route: ['', 'login'], name: 'login', moduleId: PLATFORM.moduleName('./components/Login/login'), title: 'Login' },
      { route: 'sign-up', name: 'sign-up', moduleId: PLATFORM.moduleName('./components/SignUp/signup'), title: 'Sign Up' },
      { route: 'create-order', name: 'create-order', moduleId: PLATFORM.moduleName('./components/CreateOrder/createorder'), title: 'Create Order' },
      { route: 'order-list', name: 'order-list', moduleId: PLATFORM.moduleName('./components/OrderList/order-list'), title: 'Order List' }

    ]);
  }
}
