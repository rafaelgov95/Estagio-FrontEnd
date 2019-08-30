import { PageHeaderModule } from './../shared/modules/page-header/page-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';
@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule,
        LayoutRoutingModule,
        PageHeaderModule
        
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        ],
    exports: [PageHeaderModule]
})
export class LayoutModule { }
    