import { inject } from 'aurelia-dependency-injection';

@inject()
export class App {
  public message: string = 'Garage';

  constructor(private menuItems: any){
  }
}
