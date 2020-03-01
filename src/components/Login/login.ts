import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { ValidationRules, ValidationControllerFactory } from 'aurelia-validation';

@inject(Router, ValidationControllerFactory)
export class Login {
  private username: string = "";
  private password: string = "";

  private controller;

  invalidName = `\${$username} is not a valid name.`;

  constructor(private router: Router, private validationControllerFactory: ValidationControllerFactory){
    this.controller =   validationControllerFactory.createForCurrentScope();
  }

  handleLogin = () => {
    //Todo: Login through server
  }

  onSubmit(){
    console.log("onSubmit called.");

      // ValidationRules
      // .ensure('username')
      // .required()
      // .on(Login);
  }
}
