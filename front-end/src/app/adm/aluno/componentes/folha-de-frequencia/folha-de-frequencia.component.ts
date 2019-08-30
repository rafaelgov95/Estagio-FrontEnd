import { UserRole } from './../../../../shared/modelos/user-role-modelo';

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-folha-de-frequencia',
  templateUrl: './folha-de-frequencia.component.html',
  styleUrls: ['./folha-de-frequencia.component.scss']
})
export class FolhaDeFrequenciaComponent implements OnInit {

  logo = "https://www-new.ufms.br/wp-content/uploads/2015/12/UFMS-timbre_2015.png"


  displayedColumns = ['n', 'dia', 'entrada', 'saida', 'assinatura'];


  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  profile: UserRole
  constructor() {
    this.profile = new UserRole("", false, "", "", "", "", "", "", "", "", "", "", false, "", "", false)

  }


  ngOnInit() {
  }

}

export interface Element {
  n: number;
  dia: string;
  entrada: string;
  saida: string;
  assinatura: string
}

const ELEMENT_DATA: Element[] = [

  { n: 1, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 2, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 3, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 4, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 5, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 6, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 7, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ft' },
  { n: 8, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 9, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 10, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 11, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 12, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ft' },
  { n: 13, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 14, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 15, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 16, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 17, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 18, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 19, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 20, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 21, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ft' },
  { n: 22, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 23, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 24, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 25, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 26, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 27, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 28, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 29, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 30, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },
  { n: 31, dia: 'Segunda', entrada: '15:32 ', saida: '18:13', assinatura: 'ok' },];