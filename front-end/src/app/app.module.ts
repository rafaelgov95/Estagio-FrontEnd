import { LoginService } from './shared/services/login/login-service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {CookieService} from 'ngx-cookie-service';
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatCheckboxModule,
        AppRoutingModule,
        ToasterModule.forRoot()
    ],
    providers: [AuthGuard,LoginService,ToasterService,CookieService],
    bootstrap: [AppComponent],
    exports:[]

})
export class AppModule {
}
