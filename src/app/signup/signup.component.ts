import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  @ViewChild('usrinput') private usrinput: ElementRef;
  @ViewChild('pwdinput') private pwdinput: ElementRef;
  @ViewChild('pw2input') private pw2input: ElementRef;
  @ViewChild('emlinput') private emlinput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  register() {
    console.log(this.usrinput.nativeElement.value,
      this.pwdinput.nativeElement.value,
      this.pw2input.nativeElement.value,
      this.emlinput.nativeElement.value);
  }
}
