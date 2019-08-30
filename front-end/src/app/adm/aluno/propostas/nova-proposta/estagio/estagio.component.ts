import { UserRole } from './../../../../../shared/modelos/user-role-modelo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-estagio',
  templateUrl: './estagio.component.html',
  styleUrls: ['./estagio.component.scss']
})
export class EstagioComponent implements OnInit {
  @Input() estagioFormGroup:FormGroup
  @Output() estagioFormGroupOutput= new EventEmitter()
  constructor(private _formBuilder: FormBuilder) {

  }
  ngOnInit() {
    this.estagioFormGroup = this._formBuilder.group({
      supervisor_nome: ['', Validators.required],
      supervisor_cargo: ['', Validators.required],
      supervisor_email: ['', Validators.required],
      data_inicio: ['', Validators.required],
      data_termino: ['', Validators.required],
      modalidade: ['', Validators.required],
      valor_bolsa: ['', Validators.required],
      valor_transporte: ['', Validators.required]
    });

    this.estagioFormGroup.valueChanges
    .subscribe(data => this.onValueChanged(data));
  }
  onValueChanged(any){
    this.estagioFormGroupOutput.emit(this.estagioFormGroup)
  }

}
