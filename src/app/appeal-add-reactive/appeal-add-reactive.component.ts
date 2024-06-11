import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { NgFor, NgIf, JsonPipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

type Doy = {
  code: string,
  description: string
}

@Component({
    selector: 'app-appeal-add-reactive',
    templateUrl: './appeal-add-reactive.component.html',
    styleUrls: ['./appeal-add-reactive.component.css'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, FontAwesomeModule, NgFor, NgIf, JsonPipe]
})
export class AppealAddReactiveComponent implements OnInit {

  infoIcon = faCircleInfo;
  applicationForm!: UntypedFormGroup;

  statusFormSub!: Subscription;

  availableDoy: Doy[] = [
    { code: '1201', description: 'ΔΟΥ Α ΠΕΙΡΑΙΑ' },
    { code: '1129', description: 'ΔΟΥ ΑΓΙΟΥ ΔΗΜΗΤΡΙΟΥ' },
    { code: '1101', description: 'ΔΟΥ Α ΑΘΗΝΩΝ' },
    { code: '1136', description: 'ΔΟΥ ΑΓΙΩΝ ΑΝΑΡΓΥΡΩΝ' }
  ];

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {


    this.applicationForm = this.fb.group({ 
      doy:  [null, [ Validators.required ]],
      eidosPraxi:  [null, [ Validators.required ]],
      numberEntoli: ['', [Validators.required ]],
      yearEntoli: [null, [Validators.required ]],
      telephone: ['', [Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      email:['', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.maxLength(300)]],
      notes: '',
      acceptanceCondition: false
    });

    this.applicationForm.setValue({
      doy: '1101',
      eidosPraxi:  '3',
      numberEntoli: 100,
      yearEntoli: 2021,
      telephone: '12345678',
      email: 'ach@com.gr',
      notes: 'bla bla',
      acceptanceCondition: true
    }); 

    const refDoy = this.applicationForm.controls['doy'];
    const refPhone = this.applicationForm.controls['telephone'];
    refDoy.valueChanges.subscribe(val => {
      console.log(val);
      console.log('subscription');
      if (val == 1136) {
        refPhone.patchValue('9999999999');
      } else {
        refPhone.patchValue('0000000000');
      }
    });

    
    this.applicationForm.setValue({
      doy: '1129',
      eidosPraxi:  '3',
      numberEntoli: 100,
      yearEntoli: 2021,
      telephone: '12345678',
      email: 'ach@com.gr',
      notes: 'bla bla',
      acceptanceCondition: true
    });
    
   

    //this.applicationForm.get('doy')?.patchValue('1129');


    /* 
    this.statusFormSub =  this.applicationForm.valueChanges.subscribe(
      val => {
        console.log(val);
        console.log('FORM VALUE CHANGED');
      }
    ); */


  }

  get doy() {
    return this.applicationForm.controls['doy'];
  }

  get eidosPraxi() {
    return this.applicationForm.controls['eidosPraxi'];
  }

  get numberEntoli() {
    return this.applicationForm.controls['numberEntoli'];
  }

  get yearEntoli() {
    return this.applicationForm.controls['yearEntoli'];
  }

  get telephone() {
    return this.applicationForm.controls['telephone'];
  }



  submitFormProsfygi() {
    console.log('submit reactive form');
    if (this.applicationForm.valid) {
      console.log('Form is valid');
      console.log(this.applicationForm);

      // submit call POST
    }
  }

  ngOnDestroy() {
    this.statusFormSub?.unsubscribe();
  }

}
