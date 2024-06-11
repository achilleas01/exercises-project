import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    standalone: true
})
export class WelcomeComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginTemplateDriven() {
    this.router.navigate(
      ['logintemplate']
    );
  }

  
  ypovoliDilwshsTemplate() {
    this.router.navigate(
      ['appeal-add-template']
    );
  }

  openExampleModal() {
    this.router.navigate(
      ['modal-example']
    );
  }

  
  loginReactive() {
    console.log('login reactive is called');
    this.router.navigate(
      ['reactive-login-example']
    );
  }

  ypovoliDilwshsReactive() {
    this.router.navigate(
      ['reactive-appeal-add']
    );
  }
  /*
  ypovoliDilwshsTemplate() {
    this.router.navigate(
      ['exercises', 'add-template-driven-form']
    );
  }

  loginTemplateDriven() {
    this.router.navigate(
      ['exercises', 'login-template-driven-form']
    );
  }

  openExampleModal() {
    this.router.navigate(
      ['exercises', 'modal-example']
    );
  } */

}
