import { UserRole } from './../../../../shared/modelos/user-role-modelo';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login/login-service';
import { EstagioAPI } from 'src/app/shared/services/estagio-api/estagio-api-service';

@Component({
  selector: 'app-nova-proposta',
  templateUrl: './nova-proposta.component.html',
  styleUrls: ['./nova-proposta.component.scss']
})
export class NovaPropostaComponent implements OnInit {
  usuarioFormGroup:FormGroup
  estagioFormGroup:FormGroup
  localEstagioFormGroup:FormGroup
  opcao
  flag=false
  propostas
  propostasControl = new FormControl('', [Validators.required]);
  formGroup:FormGroup
  constructor(private estagioService: EstagioAPI, private _formBuilder: FormBuilder) {
    this.propostas = ['18/08/17'];
  }
  ngOnInit() {
    this.estagioService.getAreas().subscribe(d=>console.log(d),e=>console.log(e))
  }
  usuarioForm(event){
    this.usuarioFormGroup=event
  }
  estagioForm(event){
    this.estagioFormGroup=event
  }
  localEstagioForm(event){
    this.localEstagioFormGroup=event
  }
  
  submit(){
    console.log(this.localEstagioFormGroup)
    console.log(this.usuarioFormGroup)
    console.log(this.estagioFormGroup)

  }
 
  getPropostas(){
    this.flag=!this.flag
  }



  // buildFormEndereco(): void {
    // this.formEnderecoFormGroup = this._formBuilder.group({
    //   add_endereco_cidade: ['', Validators.required],
    //   add_endereco_cep: ['', Validators.required],
    //   add_endereco_estado: ['', Validators.required],
    //   add_endereco_numero: ['', Validators.required],
    //   add_endereco_rua: ['', Validators.required],
    //   add_endereco_bairro: ['', Validators.required],
    // });
  // }
}
