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
    config.map([
      { route: '', name: 'login', moduleId: PLATFORM.moduleName('./components/Login/login'), title: 'Login' },
      { route: 'sign-up', name: 'signup', moduleId: PLATFORM.moduleName('./resources/SignUp/signup'), title: 'Sign Up', nav: true }
    ]);
  }
}
