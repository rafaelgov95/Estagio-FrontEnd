import { Router } from '@angular/router';
import { Rati } from './../../../../shared/modelos/rati-modelo';
import { RatiService } from './../../../../shared/services/sgti/rati/rati-service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserRole } from 'src/app/shared/modelos/user-role-modelo';
@Component({
  selector: 'app-visualizar-rati',
  templateUrl: './visualizar-rati.component.html',
  styleUrls: ['./visualizar-rati.component.scss']
})
export class VisualizarRatiComponent implements OnInit {
  resposta = false
  rati: Rati
  logo = "https://www-new.ufms.br/wp-content/uploads/2015/12/UFMS-timbre_2015.png"
  adm = false
  status = [
    { value: 'PENDENTE', viewValue: 'Pendente' },
    { value: 'EXECUCAO', viewValue: 'Execução' },
    { value: 'PRONTO', viewValue: 'Pronto' }
  ];

  constructor(private router: Router, private ratiService: RatiService) {

    this.rati = new Rati()
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem("currentUserRole"))['cpf'] == "04634501163") {
      this.adm = true
      console.log(this.adm);
    } else {
      this.adm = false
      console.log(this.adm);
    }
    this.rati = this.ratiService.getRati();
    if (this.rati == undefined) {
      this.router.navigate(["/sgti/rati/meus-rati"]);
    }

  }

  addResposta() {
    this.ratiService.AddResposta(this.rati).subscribe(data => { this.rati = data }, err => { })
    this.resposta = !this.resposta
  }
}
