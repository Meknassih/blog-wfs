import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  private authError: any;
  private loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
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

  ngOnInit() {
  }

  authenticate() {
    console.log(this.loginForm.value);
    if (this._authService.login(this.loginForm.value.username, this.loginForm.value.password))
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
