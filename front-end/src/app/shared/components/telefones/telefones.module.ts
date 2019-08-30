import { MatIconModule, MatCardModule, MatButton, MatButtonModule, MatOptionModule, MatSelect, MatSelectModule, MatInputModule, MatFormFieldModule, MatAutocomplete, MatAutocompleteModule, MatCheckbox, MatCheckboxModule, MatButtonToggleModule, MatChipsModule, MatCommonModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatLineModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatPseudoCheckboxModule, MatRadioModule, MatRippleModule, MatSidenavModule, MatSlideToggleModule, MatSliderModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTabsModule, MatTableModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { TelefoneFormComponent } from './telefone-form/telefone-form.component';
import { TelefonesComponent } from './telefones.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { TextMaskModule } from 'angular2-text-mask';

const MaterialModules = [
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatCommonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatLineModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatPseudoCheckboxModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTabsModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModules
    // TextMaskModule

  ],
  providers: [],
  declarations: [TelefonesComponent,TelefoneFormComponent
  ],
  exports: [TelefonesComponent,
    MaterialModules]
})
export class TelefonesModule { }
