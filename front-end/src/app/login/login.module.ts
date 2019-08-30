import { LoginService } from './../shared/services/login/login-service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatProgressSpinnerModule } from '@angular/material';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [CookieService],
  declarations: [LoginComponent,
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
