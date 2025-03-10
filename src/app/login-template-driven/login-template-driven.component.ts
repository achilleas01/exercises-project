import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class MyModel {
  constructor(public textemail:string = '',
              public textpassword:string = '') {
  }
}


@Component({
  selector: 'app-login-template-driven',
  templateUrl: './login-template-driven.component.html',
  styleUrls: ['./login-template-driven.component.css']
})
export class LoginTemplateDrivenComponent implements OnInit {

   model: MyModel; 

  constructor() { 
    this.model = new MyModel();
    this.model.textemail = 'achilleas@yahoo.gr';
    this.model.textpassword = 'aaaaaaaaaa';
  }

  ngOnInit(): void {
  }

  login(loginForm: NgForm, submit: Event) {
    console.log(loginForm);
    console.log(loginForm.value);
    console.log(loginForm.valid);
    console.log(submit);
    console.log(this.model);
  }

}