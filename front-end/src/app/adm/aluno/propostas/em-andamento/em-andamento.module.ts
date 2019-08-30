import { PageHeaderModule } from './../../../../shared/modules/page-header/page-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatCardModule } from '@angular/material';
import { EmAndamentoComponent } from './em-andamento.component';
import { EmAndamentoRoutingModule } from './em-andamento-routing.module';

@NgModule({
    imports: [
        CommonModule,
        EmAndamentoRoutingModule,
        PageHeaderModule,
        MatCardModule
        ],
    declarations: [
        EmAndamentoComponent,
        ],
    exports: [PageHeaderModule
    ],providers:[]

})
export class EmAndamentoModule { }
