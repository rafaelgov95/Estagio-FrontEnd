import { AuthGuardRati } from './../../../shared/guard/auth-rati.guard';
import { RatiService } from './../../../shared/services/sgti/rati/rati-service';
import { EstagioAPI } from './../../../shared/services/estagio-api/estagio-api-service';
import { HtmleditorComponent } from './../../../shared/components/htmleditor/htmleditor.component';
import { PageHeaderModule } from './../../../shared/modules/page-header/page-header.module';
//Importação dos Modulos Angulares
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
//Importação dos Modulos
import { RatiRoutingModule } from './rati-routing.module';
// import { CKEditorModule } from 'ng2-ckeditor';
// import { MdPaginatorModule, MatCardModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatIconModule, MatProgressSpinnerModule, MatSortModule } from '@angular/material';
//Importação Pipes
import { PipesModule } from './../../../shared/pipes/pipes-module';
import { SafeHtmlPipe } from './../../../shared/pipes/htmlview';
//Importação Do Toast
// import { CustomOption } from './../../../shared/components/toast/ng2-toast-config';
// import { ToastModule, ToastOptions } from 'ng2-toastr';
//Importação Componentes
import { MeusRatiComponent } from './meus-rati/meus-rati.component';
import { VisualizarRatiComponent } from './visualizar-rati/visualizar-rati.component';
import { NovoRatiComponent } from './novo-rati/novo-rati.component';


import { RatiComponent } from './rati.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIcon, MatIconModule, MatProgressSpinnerModule, MatTableModule, MatPaginator, MatPaginatorModule, MatSortModule, MatButton, MatButtonModule, MatTabsModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { BannerInfoModule } from '../../../shared/modules/banner-info/banner-info.module';
import { BannerInfoRatiModule } from '../../../shared/modules/banner-info-rati/banner-info-rati.module';
// import { TextMaskModule } from 'angular2-text-mask';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {NgxMaskModule} from 'ngx-mask'
// export const options: Partial<IConfig> | (() => Partial<IConfig>);



@NgModule({
  imports: [
    CKEditorModule,
    CommonModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    RatiRoutingModule,
    PipesModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    PageHeaderModule,
    MatOptionModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    BannerInfoModule,
    BannerInfoRatiModule,
    NgxMaskModule.forRoot()

 ],
  declarations: [RatiComponent, HtmleditorComponent, MeusRatiComponent, NovoRatiComponent, VisualizarRatiComponent],
  providers: [AuthGuardRati,RatiService, EstagioAPI],
  exports: [
    PipesModule, MatCardModule,MatIconModule, MatProgressSpinnerModule, MatTableModule,
    CdkTableModule,MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    PageHeaderModule,
    MatOptionModule,
    MatSelectModule,
    MatSortModule,MatButtonModule,BannerInfoModule]
})
export class RatiModule { 
  
}
