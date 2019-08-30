
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../services/login/login-service';

@Injectable()
export class AuthGuardRati implements CanActivate {

    constructor(private router: Router) { }

    canActivate(){
        if(JSON.parse(localStorage.getItem("currentUserRole"))['cpf']=="04634501163")
            return true
        this.router.navigate(['/sgti/rati/meus-rati']);
        return false
    }
}
