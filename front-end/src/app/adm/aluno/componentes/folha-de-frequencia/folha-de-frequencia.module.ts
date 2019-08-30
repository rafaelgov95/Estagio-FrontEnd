import { PageHeaderModule } from './../../../../shared/modules/page-header/page-header.module';
import { FolhaDeFrequenciaRoutingModule } from './folha-de-frequencia-routing.module';
import { FolhaDeFrequenciaComponent } from './folha-de-frequencia.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule,MatTabsModule, MatCardModule,MatChipsModule} from '@angular/material';

   
@NgModule({
    imports: [
        CommonModule,
        FolhaDeFrequenciaRoutingModule,
        PageHeaderModule,
        CdkTableModule,
        MatTableModule,
        MatCardModule,
        MatTabsModule,
        MatChipsModule


    ],
    declarations: [
        FolhaDeFrequenciaComponent
    ],exports:[FolhaDeFrequenciaRoutingModule],providers:[]
})
export class FolhaDeFrequenciaModule { }
