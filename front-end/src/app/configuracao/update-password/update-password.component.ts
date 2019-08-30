import { ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
ToasterService
@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  flag: false
  data: any
  formG: FormGroup;
  form: form_troca_senha
  // @Input() updateDataInput = this.formG
  // @Output() updateDataOutput = new EventEmitter
  constructor(private toastr: ToasterService, private fb: FormBuilder) {

    console.log("Chego 1")
    this.form = new form_troca_senha('', '', '');

  }
  showSuccess() {
    this.toastr.pop('Sua senha foi alterada!', 'Sucesso!');
  }

  showError() {
    // this.toastr.('Infelizmente não foi possível alterar a senha!', 'Oops!');
  }
  ngOnInit(): void {

    this.buildForm();

  }

  buildForm(): void {
    this.formG = this.fb.group({
      'senha_atual': [this.form.senha_atual, [
        Validators.required,
        Validators.minLength(4)
      ]
      ],
      'senha_nova': [this.form.senha_nova, [
        Validators.required,
        Validators.minLength(4)
      ]],
      'senha_confirma': [this.form.senha_confirma, [
        Validators.required,
        Validators.minLength(4)
      ]]

    });

    this.formG.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.formG) { return; }
    const form = this.formG;

    for (const field in this.formErrors) {
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
    'senha_atual': ''
    ,
    'senha_nova': '',
    'senha_confirma': ''

  };

  validationMessages = {
    'senha_atual': {
      'minlength': 'Senha tem que possuir mais de 4 caracteres'
    },
    'senha_nova': {
      'minlength': 'Senha tem que possuir mais de 4 caracteres'
    },
    'senha_confirma': {
      'minlength': 'Senha tem que possuir mais de 4 caracteres'
    }
  };
  UpdatePassword() {
    // this.updatePassword(this.formG.get('senha_atual').value, this.formG.get('senha_nova').value)
    //   .subscribe(
    //   data => {
    //     this.showSuccess()
    //     console.log(data);
    //   },
    //   error => {
    //     this.showError()
    //     console.log('Erro');
    //   });
  }
}

export class form_troca_senha {
  constructor(
    public senha_atual: string,
    public senha_nova: string,
    public senha_confirma: string,
  ) { }
}