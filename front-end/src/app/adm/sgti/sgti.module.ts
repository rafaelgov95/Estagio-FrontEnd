import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule, MatCardModule, MatTooltipModule, MatToolbarModule, MatTabsModule, MatStepperModule, MatSortModule, MatSnackBarModule, MatSlideToggleModule, MatSliderModule, MatSidenavModule, MatSelectModule, MatRippleModule, MatProgressBarModule, MatProgressSpinnerModule, MatPaginatorModule, MatNativeDateModule, MatButtonModule, MatButtonToggleModule, MatIconModule } from '@angular/material';
import { PipesModule } from './../../shared/pipes/pipes-module';
import { SafeHtmlPipe } from './../../shared/pipes/htmlview';
import { RatiModule } from './rati/rati.module';
import { RouterModule,Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SgtiRoutingModule } from './sgti-routing.module';
import { SgtiComponent } from './sgti.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    SgtiRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,  
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSortModule,
    PageHeaderModule
  ],
  declarations: [SgtiComponent],
  providers: [],
  exports: [ ]
})
export class SgtiModule { }
