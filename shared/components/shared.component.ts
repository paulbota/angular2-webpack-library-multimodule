import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'shared-component',
  styles: [``],
  template: `
    <h1>Shared Component</h1>
  `
})
export class SharedComponent implements OnInit {

  public foo: string = 'shared';

  constructor() {
  }

  ngOnInit() {
    console.log('hello from SampleComponent');
  }
}
