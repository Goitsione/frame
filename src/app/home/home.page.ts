import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
showpassword=false;


  constructor() {}

  togglePassword(){
    this.showpassword=!this.showpassword;
  }
}