import { Router } from 'aurelia-router';
import { inject } from 'aurelia-dependency-injection';

@inject(Router)
export class Signup {

  private username: string = "";
  private password: string = "";
  private errors = {}

  constructor(private router: Router){
  }

  handleRegister(){
    
  }
}
