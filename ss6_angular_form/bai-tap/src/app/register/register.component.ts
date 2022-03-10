import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidateUntil} from './validateUntil';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {
  validateUntil = new ValidateUntil();
  addressList = ['Viet Nam', 'USA', 'UK'];

  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),

    passWordForm: new FormGroup({
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      confirmPassWord: new FormControl('')
    }, this.validateUntil.comparePassword)
    ,
    age: new FormControl('', [Validators.required, this.validateUntil.check18Age]),
    gender: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required,
      Validators.pattern('^\\+84\\d{9,10}$')])
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm);
  }
}
