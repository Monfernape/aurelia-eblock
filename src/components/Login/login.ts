import { inject, NewInstance } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { ValidationRules, ValidationControllerFactory, ValidationController } from 'aurelia-validation';

@inject(Router, NewInstance.of(ValidationController))
export class Login {
  private username: string = "";
  private password: string = "";
  private errors = {}

  private controller: ValidationController

  constructor(private router: Router, private validationController: ValidationController){
    this.controller = validationController;
    ValidationRules
    .ensure('username').required().withMessage("Username Can't Be Empty").on(this)
    .ensure('password').required().withMessage("Password Can't Be Empty").on(this)
  }

  handleLogin = () => {
    this.controller.validate()
    .then(validation => {
      if(validation.valid) this.errors = {}
      else {
        validation.results.forEach(x => {
          this.errors[x.propertyName] = x.rule.message.value
        })
      }
    })  }

}
