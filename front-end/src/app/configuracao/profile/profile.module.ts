import { UpdatePasswordComponent } from './../update-password/update-password.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { ToasterModule } from 'angular2-toaster';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    PageHeaderModule,
    NgbModule,
    ToasterModule.forRoot()
  ], 
   providers:[],
   declarations: [ProfileComponent,UpdatePasswordComponent],
   exports:[ProfileComponent]
})
export class ProfileModule { }
