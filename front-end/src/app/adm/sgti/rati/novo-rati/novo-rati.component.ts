import { RatiService } from './../../../../shared/services/sgti/rati/rati-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'selenium-webdriver/firefox';
import { ToasterService } from 'angular2-toaster';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
// ClassicEditor
@Component({
  selector: 'novo-rati',
  templateUrl: './novo-rati.component.html',
  styleUrls: ['./novo-rati.component.scss']
})
export class NovoRatiComponent implements OnInit {
  editar = false;
  numero = 6799507979
  sucesso = false;
  ratiForm: FormGroup;
  profile: Profile;
  logo = "https://www-new.ufms.br/wp-content/uploads/2015/12/UFMS-timbre_2015.png"

  constructor(private toastr: ToasterService, private ratiService: RatiService, private fb: FormBuilder) {
    this.profile = JSON.parse(localStorage.getItem("currentUserRole"))
  }

  public Editor = ClassicEditor;

  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    this.ratiForm.get('mensagem').setValue(data);
    console.log(data);
  }



  buildForm(): void {
    this.ratiForm = this.fb.group({
      'titulo': ['', [
        Validators.required,
        Validators.minLength(4)]
      ],
      'prioridade': ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      'mensagem': ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      'numero': ['', [
        Validators.required,
        // Validators.minLength(11)
        // Validators.maxLength(11)
      ]]

    });

    this.ratiForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }
  // change(editor:any) {
  //   const EditorData = editor.getData();

  //   this.ratiForm.get('mensagem').setValue(EditorData);
  // }

  onValueChanged(data?: any) {
    if (!this.ratiForm) { return; }
    const form = this.ratiForm;
    console.log(form);

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
    'titulo': '',
    'prioridade': '',
    'mensagem': '',
    'numero': ''

  };

  validationMessages = {
    'titulo': {
      'required': 'Titulo de usuário requerido.',
      'minlength': 'Titulo tem que possuir mais de 4 caracteres'
    },
    'prioridade': {
      'required': 'Prioridade requirida.',
      'minlength': 'Prioridade tem que possuir mais de 4 caracteres'
    },
    'mensagem': {
      'required': 'Mensagem requirida.',
      'minlength': 'Mensagem tem que possuir mais de 4 caracteres'
    },
    'numero': {
      'required': 'Número requirida.',
      'minlength': 'Número tem que possuir mais de 11 caracteres'
    }


  };

  Enviar(evento) {
    if (this.ratiForm.valid) {
      this.ratiService.AddRati(this.ratiForm.controls['titulo'].value, this.ratiForm.controls['prioridade'].value, this.ratiForm.controls['mensagem'].value, this.ratiForm.controls['numero'].value).subscribe(
        data => {
          this.showSuccess()
          this.sucesso = !this.sucesso
        },
        error => {
          console.log('Erro');
        });
    }
  }

  mask(userInput) {
    let numbers = userInput.match(/\d/g);
    let numberLength = 0;
    if (numbers) {
      numberLength = numbers.join("").length;
    }

    if (numberLength > 10) {
      return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else {
      return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
  }
  showSuccess() {
    // this.toastr.success('Mensagem Enviada!', 'Sucesso!');
  }


  ngOnInit() {
    this.buildForm()
  }
  ngOnDestroy() {
    this
  }

}
