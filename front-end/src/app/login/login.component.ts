import { element } from 'protractor';
import { LoginService } from './../shared/services/login/login-service';
import { User } from './../shared/modelos/user-modelo';
import { routerTransition } from '../router.animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { from, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]

})
export class LoginComponent implements OnInit {
  isLoding = false
  subscription: Subscription;
  emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  alert = true;
  returnUrl: string;
  UserForm: FormGroup;
  user: User;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,

  ) {
    this.user = new User('', '', '');
  }

  ngOnInit(): void {
    this.subscription = fromEvent(document, 'keypress').subscribe(e => {
      if (e['key'] == "Enter") {
        this.login()
      }


    })
    this.buildForm();
    // reset login status
    this.loginService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';

  }

  buildForm(): void {
    this.UserForm = this.fb.group({
      'passaporte': [this.user.email, [
        Validators.required,
        Validators.minLength(4)
        // ,
        // Validators.pattern(this.emailRegex)
      ]
      ],
      'senha': [this.user.senha, [
        Validators.required,
        Validators.minLength(4)
      ]]
    });

    this.UserForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.UserForm) { return; }
    const form = this.UserForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'passaporte': ''
    ,
    'senha': ''
  };

  validationMessages = {
    'passaporte': {
      'required': 'Nome de usuário requerido.',
      'minlength': 'Nome tem que possuir mais de 4 caracteres'
    },
    'senha': {
      'required': 'Senha requirida.',
      'minlength': 'Senha tem que possuir mais de 4 caracteres'
    }
  };

  Lodingspinner() {
    this.isLoding = !this.isLoding
  }

  login() {
    this.Lodingspinner()
    this.loginService.logar(this.UserForm.get('passaporte').value, this.UserForm.get('senha').value)
      .subscribe(
        data => {
          this.loginService.getAtributos()
            .subscribe(
              data => {
                this.loginService.getPerfil(data).subscribe(
                  data => {
                    this.loginService.logarAPI(data).subscribe(
                      data => { 
                          console.log("ENTRO E BUGO")
                        this.router.navigate(['/home']);
                      }, error => {
                        this.Lodingspinner()
                      })
                  },
                  erro => {
                    this.Lodingspinner()
                  })

              },
              error => {
                this.Lodingspinner()
              });
        },
        error => {
          this.alert = false;
          setTimeout(() => this.alert = true, 10000);
          this.loginService.logout();
          this.Lodingspinner()
        });

  }
}

