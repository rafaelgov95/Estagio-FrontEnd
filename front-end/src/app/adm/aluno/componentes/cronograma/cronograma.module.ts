import { CronogramaComponent } from './cronograma.component';
import { CronogramaRoutingModule } from './cronograma-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { MatCardModule, MatListModule } from '@angular/material';
import { PageHeaderModule } from '../../../../shared/modules/page-header/page-header.module';


@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        CronogramaRoutingModule,
        CdkTableModule,
        MatListModule,
        MatCardModule
        ],
    declarations: [
        CronogramaComponent
        ],
    exports: [
    ]
})
export class CronogramaModule { }
