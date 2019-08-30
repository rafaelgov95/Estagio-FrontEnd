import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'profile', loadChildren: './../configuracao/profile/profile.module#ProfileModule' },
            { path: 'estagio', loadChildren: '../adm/aluno/aluno.module#AlunoModule' },
            { path: 'sgti', loadChildren: '../adm/sgti/sgti.module#SgtiModule' }         
        ]
        }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
