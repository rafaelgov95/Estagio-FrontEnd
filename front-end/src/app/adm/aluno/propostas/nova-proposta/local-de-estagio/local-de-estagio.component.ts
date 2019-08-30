import { LocalEstagio } from './../../../../../shared/modelos/localEstagio';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EstagioAPI } from 'src/app/shared/services/estagio-api/estagio-api-service';

@Component({
  selector: 'form-local-de-estagio',
  templateUrl: './local-de-estagio.component.html',
  styleUrls: ['./local-de-estagio.component.scss']
})
export class LocalDeEstagioComponent implements OnInit {
  @Input() localEstagioFormGroup: FormGroup
  @Output() localEstagioFormGroupOutput = new EventEmitter();

  empresa: LocalEstagio = new LocalEstagio()
  constructor(private estagioAPI: EstagioAPI,private _formBuilder: FormBuilder) { 

  }
  ngOnInit() {
    this.localEstagioFormGroup = this._formBuilder.group({
      empresa_nome: ['', Validators.required],
      empresa_fantasia: ['', Validators.required],
      empresa_email: ['', Validators.required],
      empresa_abertura: ['', Validators.required],
      empresa_cnpj: ['', Validators.required],
      empresa_atividade: ['', Validators.required]
    });
    this.localEstagioFormGroup.valueChanges
    .subscribe(data => this.onValueChanged(data));
  }
  onValueChanged(any){
    this.localEstagioFormGroupOutput.emit(this.localEstagioFormGroup)
  }

  buscarEmpresa(cpf) {
    console.log(cpf)
    this.estagioAPI.BuscarEmpresa(cpf)
      .subscribe(
        data => {
          this.empresa = data
          console.log("estagio:", this.empresa)
        },
        error => {
          console.log('Erro');
        });
  }
}

