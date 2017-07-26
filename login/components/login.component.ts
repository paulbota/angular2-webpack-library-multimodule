import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'login-component',
  styles: [``],
  template: `
    <h1>Login Component</h1>
  `
})
export class LoginComponent implements OnInit {

  public foo: string = 'shared';

  constructor() {
  }

  ngOnInit() {
    console.log('hello from SampleComponent');
  }
}
