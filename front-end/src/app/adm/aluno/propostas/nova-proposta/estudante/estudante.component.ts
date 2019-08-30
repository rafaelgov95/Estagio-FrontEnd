import { UserRole } from './../../../../../shared/modelos/user-role-modelo';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'form-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.scss']
})
export class EstudanteComponent implements OnInit {
  profile: UserRole
  @Input() usuarioFormGroup:FormGroup
  @Output() usuarioFormGroupOutput= new EventEmitter()
  constructor(private _formBuilder: FormBuilder) {
    this.profile = new UserRole("", false, "", "", "", "", "", "", "", "", "", "", false, "", "", false)
    // this.passaporteService.getPerfil()
    //   .subscribe(
    //     data => {
    //       this.profile=data
    //       this.usuarioFormGroup.controls.nome_completo.setValue(this.profile.nomeCompleto)
    //       this.usuarioFormGroup.controls.rga.setValue(this.profile.rga)
    //       this.usuarioFormGroup.controls.cpf.setValue(this.profile.cpf)
    //       this.usuarioFormGroup.controls.curso.setValue(this.profile.lotacao)
    //       this.usuarioFormGroup.controls.tipo_curso.setValue(this.profile.tipo)
    //       this.usuarioFormGroup.controls.semestre_atual.setValue(this.profile.dataCriacao)
    //       this.usuarioFormGroup.controls.data_criacao.setValue(this.profile.dataCriacao)
    //       this.usuarioFormGroup.controls.email_pessoal.setValue(this.profile.emailAlternativo)
    //     },
    //     error => {
    //       console.log('Erro');
    //     });
  }

  ngOnInit() {
    this.usuarioFormGroup= this._formBuilder.group({
      nome_completo: ['', Validators.required],
      rga: ['', Validators.required],
      cpf: ['', Validators.required],
      curso: ['', Validators.required],
      tipo_curso: ['', Validators.required],
      semestre_atual: ['', Validators.required],
      data_criacao: ['', Validators.required],
      email_pessoal: ['', Validators.required]
    });
    this.usuarioFormGroup.valueChanges
    .subscribe(data => this.onValueChanged(data));
  }
  onValueChanged(any){
    this.usuarioFormGroupOutput.emit(this.usuarioFormGroup)
  }

}
