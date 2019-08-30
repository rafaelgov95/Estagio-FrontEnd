import { ConcluidasComponent } from './concluidas.component';
import { PageHeaderModule } from './../../../../shared/modules/page-header/page-header.module';
;

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatCardModule } from '@angular/material';
import { ConcluidasRoutingModule } from './concluidas-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ConcluidasRoutingModule,
        PageHeaderModule,
        MatCardModule
        ],
    declarations: [
        ConcluidasComponent,
        ],
    exports: [PageHeaderModule
    ],providers:[]

})
export class ConcluidasModule { }
