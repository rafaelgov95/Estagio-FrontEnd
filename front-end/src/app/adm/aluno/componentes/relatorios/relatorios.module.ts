import { PageHeaderModule } from './../../../../shared/modules/page-header/page-header.module';
import { RelatoriosRoutingModule } from './relatorios-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatoriosComponent } from './relatorios.component';
// import { ChartsModule } from 'ng2-charts';
import { MatCardModule, MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
@NgModule({
    imports: [
        CommonModule,
        RelatoriosRoutingModule,
        PageHeaderModule,
        // ChartsModule,
        CdkTableModule,
        MatTableModule,
        MatCardModule
    ],
    declarations: [
        RelatoriosComponent
    ],exports:[]
})
export class RelatoriosModule { }
