import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private dbMockup: Array<User>;
  private currentUser: User;

  constructor() {
    this.currentUser = undefined;
    this.dbMockup = [];
    this.dbMockup.push(new User('pop', 'lol', 'pop@gmail.com'));
    this.dbMockup.push(new User('dud', 'lol', 'dud@gmail.com'));
    this.dbMockup.push(new User('top', 'lol', 'top@gmail.com'));
  }

  login(usr: string, pwd: string): User {
    const u = this.dbMockup.find((user) => (user.getUsername() === usr && user.getPassword() === pwd));
    this.currentUser = u;
    console.log('found user ', u);
    if (u)
      return { ...u } as User;
    else
      return undefined;
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
