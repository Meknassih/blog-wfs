import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  private signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password1: new FormControl('', [Validators.required]),
      password2: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  get username() { return this.signupForm.get('username'); }
  get password1() { return this.signupForm.get('password1'); }
  get password2() { return this.signupForm.get('password2'); }
  get email() { return this.signupForm.get('email'); }

  register() {
    console.log(this.signupForm.value.username,
      this.signupForm.value.password1,
      this.signupForm.value.password2,
      this.signupForm.value.email);
  }
}
