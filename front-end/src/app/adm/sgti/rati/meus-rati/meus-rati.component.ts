import { element } from 'protractor';
import { RatiService } from './../../../../shared/services/sgti/rati/rati-service';
import { EstagioAPI } from './../../../../shared/services/estagio-api/estagio-api-service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Rati } from '../../../../shared/modelos/rati-modelo';
import { range } from 'rxjs';

@Component({
  selector: 'meus-rati',
  templateUrl: './meus-rati.component.html',
  styleUrls: ['./meus-rati.component.scss']
})
export class MeusRatiComponent implements OnInit {
  displayedColumnsAdm = ['id', 'nome', 'titulo', 'situacao', 'data_at', 'prioridade'];
  displayedColumns = ['id', 'titulo', 'situacao', 'data_at', 'prioridade'];
  dataSourceHead: string[] = ["PENDENTE", "EXECUCAO", "PRONTO"]
  dataSource = [[], [], []]
  adm = false
  constructor(private ratiService: RatiService, private router: Router) {

    if (JSON.parse(localStorage.getItem("currentUserRole"))['cpf'] == "04634501163") {
      this.adm = true
    }
    // this.ratiService.getAutentica().subscribe(data => {
    //   this.adm = data

    // }, erro => {
    //   this.adm = false
    // })
  }
  ngOnInit() {
    this.ratiService.getAllRati().subscribe(
      (data: Rati[]) => {
        for (var i = 0; i < 3; i++) {
          this.dataSource[i] = data.filter(e => e.situacao == this.dataSourceHead[i])
        }

      }, erro => {

      });
  }

  visualizar(elemento) {
    this.ratiService.setRati(elemento)
    this.router.navigate(['/sgti/rati/visualizar-rati'])
  }
  ngOnDestroy(): void {
    // this.ratiService.
  }
}


