import { Component, OnInit, NgModule } from '@angular/core';

import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';


import { MustMatch } from '../_helper/must-match.validator';


 @Component({
   selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
 styleUrls: ['./assignment2.component.css']
 })
 export class Assignment2Component implements OnInit {

    registerForm: FormGroup;
    submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
	  
	  this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
	  
   }
    get f() { return this.registerForm.controls; }
	
	onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

 }
