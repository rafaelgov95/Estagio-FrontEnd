import { AuthGuardRati } from './../../../shared/guard/auth-rati.guard';
import { RatiComponent } from './rati.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeusRatiComponent } from './meus-rati/meus-rati.component';
import { NovoRatiComponent } from './novo-rati/novo-rati.component';
import { VisualizarRatiComponent } from './visualizar-rati/visualizar-rati.component';


const routes: Routes = [
    { path: '', component: RatiComponent },
    { path: 'novo-rati', component: NovoRatiComponent },
    { path: 'meus-rati', component: MeusRatiComponent },
    { path: 'visualizar-rati', component: VisualizarRatiComponent }

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RatiRoutingModule { }
