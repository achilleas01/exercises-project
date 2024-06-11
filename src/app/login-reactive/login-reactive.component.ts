import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  // template: '<p>login-reactive works!</p>',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {
  initialValueObj = {
    email: "hello@gmail.com",
    password: "123456"
  };


  // first way
  loginReactiveForm = new UntypedFormGroup({
    email: new UntypedFormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur'}),
    password: new UntypedFormControl('', {
       validators: [Validators.required, Validators.minLength(8)], 
       updateOn: 'blur' })
  });
   /*
    loginForm = this.fb.group({
      email: ["", {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur'}],
      password: ['', [Validators.required, Validators.minLength(8)]]
    }); */
  
  

  //constructor(private fb: FormBuilder) { } 
   constructor() {

  }

  ngOnInit(): void {

    this.loginReactiveForm.valueChanges.subscribe(
      val =>  { 
        console.log(val);
        const passwordControl = this.loginReactiveForm.controls['password'];
        if (val?.email == '123@com.gr') {
          passwordControl.disable({ emitEvent: false });
        } else if (val?.email == 'aaa@com.gr') {
          passwordControl.enable({ emitEvent: false });
        }
        // console.log(val);
   });

  }


  
  get email() {
    return this.loginReactiveForm.controls['email'];
  }

  get password() {
      return this.loginReactiveForm.controls['password'];
  }

  loginFormSubmit() {
    console.log('login form submission is called');
    console.log(this.loginReactiveForm);
    console.log(this.loginReactiveForm.valid);
  }

}
