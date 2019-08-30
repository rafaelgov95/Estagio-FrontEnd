import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';
import { MatCardModule,MatInputModule } from '@angular/material';

import { AlunoRoutingModule } from './../../adm/aluno/aluno-routing.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerInfoModule } from '../../shared/modules/banner-info/banner-info.module';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        PageHeaderModule,
         MatCardModule,
         MatInputModule,
        BannerInfoModule
    ], exports: [PageHeaderModule],
    declarations: [
        HomeComponent
    ],providers:[]
})
export class HomeModule { }
