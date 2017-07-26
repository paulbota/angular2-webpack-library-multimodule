import '@angular/core';
import '@angular/common';
import '@angular/compiler';
import '@angular/forms';

import {NgModule} from '@angular/core'
import { LoginComponent } from './components/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: []
})
export class LoginModule {}
