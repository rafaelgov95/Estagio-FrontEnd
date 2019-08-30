import { TelefonesModule } from './../../../../shared/components/telefones/telefones.module';
import { EstagioAPI } from './../../../../shared/services/estagio-api/estagio-api-service';
import { NovaPropostaComponent } from './nova-proposta.component';
import { PageHeaderModule } from './../../../../shared/modules/page-header/page-header.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatCardModule, MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSnackBarModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatSlideToggleModule, MatSortModule, MatFormFieldModule, MatAutocomplete } from '@angular/material';
import { NovaPropostaRoutingModule } from './nova-proposta-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { EstudanteComponent } from './estudante/estudante.component';
import { EstagioComponent } from './estagio/estagio.component';
import { LocalDeEstagioComponent } from './local-de-estagio/local-de-estagio.component';

@NgModule({
    imports: [
        CommonModule,
        NovaPropostaRoutingModule,
        PageHeaderModule,
        MatCardModule, 
        FormsModule,
        ReactiveFormsModule,
        CdkTableModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,       
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatFormFieldModule,
        TelefonesModule
        ],
    declarations: [
        NovaPropostaComponent,
        EstudanteComponent,
        EstagioComponent,
        LocalDeEstagioComponent
    ],
    exports: [
        TelefonesModule,
        PageHeaderModule,
        CommonModule,
        NovaPropostaRoutingModule,
        PageHeaderModule,
        MatCardModule, 
        FormsModule,
        ReactiveFormsModule,
        CdkTableModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,       
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatFormFieldModule
    ],providers:[EstagioAPI]

})
export class NovaPropostaModule { }
