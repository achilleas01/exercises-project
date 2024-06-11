import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { NgIf, JsonPipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-appeal-add-template',
    templateUrl: './appeal-add-template.component.html',
    styleUrls: ['./appeal-add-template.component.css'],
    standalone: true,
    imports: [FormsModule, FontAwesomeModule, NgIf, JsonPipe]
})
export class AppealAddTemplateComponent implements OnInit {

  infoIcon = faCircleInfo;

  initialVal = {
    email: 'ackatsaros@gmail.com',
    telephone: '2131356666'
  }; 

  constructor() { }

  ngOnInit(): void {
  }

  onNotesChange(ev: Event) {
    console.log(ev);
    console.log('notes changed !!');
  }

  submitFormProsfygi(applicationForm: NgForm, submit:Event) {
    console.log('submit form prosfygi');
    console.log(applicationForm.value);
    console.log(applicationForm.valid);
    console.log(this.initialVal?.email);
    console.log(this.initialVal?.telephone);
    console.log(submit);
  }

}
