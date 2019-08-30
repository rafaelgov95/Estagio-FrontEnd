import { AlunoRoutingModule } from './aluno-routing.module';
import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatCardModule } from '@angular/material';
import { AlunoComponent } from './aluno.component';

@NgModule({
    imports: [
        CommonModule,
        AlunoRoutingModule,
        PageHeaderModule,
        MatCardModule
        ],
    declarations: [
        AlunoComponent],
    exports: [PageHeaderModule
    ],providers:[]

})
export class AlunoModule { }
