import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private dbMockup: Array<User>;
  private currentUser: User;

  constructor(
    private _httpService: HttpClient,
    private _errorService: ErrorService) {
    this.currentUser = undefined;
    this.dbMockup = [];
    this.dbMockup.push(new User('pop', 'lol', 'pop@gmail.com'));
    this.dbMockup.push(new User('dud', 'lol', 'dud@gmail.com'));
    this.dbMockup.push(new User('top', 'lol', 'top@gmail.com'));
  }

  login(user: User): Observable<User> {
    return this._httpService.post<User>(environment.apiBaseUrl, user.toJson({ username: true, password: true }))
      .pipe(
        catchError(this._errorService.handleHttpError('login', user))
      );
  }

  disconnect() {
    this.currentUser = undefined;
  }

  signup(usr: string, pwd: string, eml: string): User {
    if (this.dbMockup.find((user) => (user.getUsername() === usr || user.getEmail() === eml)))
      return undefined;
    else {
      this.dbMockup.push(new User(usr, pwd, eml));
      return this.dbMockup[this.dbMockup.length - 1];
    }
  }

  getCurrentUser(): User {
    return this.currentUser;
  }
}
