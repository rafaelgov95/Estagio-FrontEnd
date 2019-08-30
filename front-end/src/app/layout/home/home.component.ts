

import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserRole } from 'src/app/shared/modelos/user-role-modelo';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [routerTransition()]
})
export class HomeComponent implements OnInit {
  
    ngOnInit() {
    }


}
