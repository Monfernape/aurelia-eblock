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
      { route: '', name: 'signup', moduleId: PLATFORM.moduleName('./resources/SignUp/signup'), title: 'Sign Up' }
    ]);
  }

  // configureRouter(config: RouterConfiguration, router: Router): void{
  //   this.router = router;
  //   config.title = 'Aurelia';
  //   config.options.pushState = true;
  //   config.options.root = './resources/SignUp/signup';
  //   config.map([
  //     {route: 'signup', name: 'signup', moduleId:'./resources/SignUp/signup' }
  //   ])
  //   console.log("router: ", router);
  // }
}
