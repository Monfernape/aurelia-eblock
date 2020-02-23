import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
@inject(Router)
export class Login {
  private username: string = "";
  private password: string = "";
  private router: Router;

  constructor(router: Router){
    this.router = router
  }

  handleLogin = () => {
    //Todo: Login through server
  }
}
