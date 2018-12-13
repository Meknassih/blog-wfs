import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  @ViewChild('usrinput') private usrinput: ElementRef;
  @ViewChild('pwdinput') private pwdinput: ElementRef;

  private authError: any;

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
    console.log(this.usrinput.nativeElement.value, this.pwdinput.nativeElement.value);
    if (this._authService.login(this.usrinput.nativeElement.value, this.pwdinput.nativeElement.value))
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
