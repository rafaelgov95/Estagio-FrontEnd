import { RatiComponent } from './rati/rati.component';
import { SgtiComponent } from './sgti.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SgtiComponent },
  { path: 'rati', loadChildren: './rati/rati.module#RatiModule' }
    
    
          
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SgtiRoutingModule { }
