import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  private authError: any;
  private loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) {
    this.authError = {
      visible: false,
      message: ''
    };
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  ngOnInit() {
  }

  authenticate() {
    this._authService.login(new User(this.username.value, this.password.value)).subscribe((user) => {
      if (!user.error) {

      }
    })
    if (this._authService.login(this.username.value, this.password.value))
      this._router.navigate(['']);
    else {
      this.authError.message = 'Cet identifiant et ce mot de passe ne correspondent à aucun utilisateur.';
      this.authError.visible = true;
    }
  }

  handleCloseNotification() {
    this.authError.visible = false;
  }
}
