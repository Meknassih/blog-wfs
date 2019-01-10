import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  handleLogout() {
    this._authService.disconnect();
    this._router.navigate(['/auth']);
  }
}
