import { FolhaDeFrequenciaComponent } from './folha-de-frequencia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: FolhaDeFrequenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FolhaDeFrequenciaRoutingModule { }
