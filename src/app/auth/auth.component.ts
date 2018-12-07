import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  @ViewChild('usrinput') private usrinput: ElementRef;
  @ViewChild('pwdinput') private pwdinput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  authenticate() {
    console.log(this.usrinput.nativeElement.value, this.pwdinput.nativeElement.value);
  }
}
