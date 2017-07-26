import '@angular/core';
import '@angular/common';
import '@angular/compiler';
import '@angular/forms';

import {NgModule} from '@angular/core'
import { SharedComponent } from './components/shared.component';



@NgModule({
  declarations: [
    SharedComponent
  ],
  exports: [
    SharedComponent
  ],
  providers: []
})
export class SharedModule {}
