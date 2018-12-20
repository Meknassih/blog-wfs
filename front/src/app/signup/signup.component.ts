import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  private signupForm: FormGroup;
  private signupError: string;

  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) { }

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
    let registerError;
    if (registerError = this._authService.signup(this.username.value, this.password1.value, this.email.value))
      this._router.navigate(['']);
    else
      this.signupError = 'SERVER ERROR';
  }

  handleCloseNotification() {
    this.signupError = undefined;
  }
}
