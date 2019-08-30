import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.scss']
})
export class CronogramaComponent implements OnInit {

  constructor() { }
  typesOfShoes = ['BackEnd', 'Front End', 'Backup', 'SSH GPG', 'IPTABLES'];

  ngOnInit() {
  }

}
