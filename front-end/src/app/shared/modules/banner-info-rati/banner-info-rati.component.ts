import { UserRole } from './../../modelos/user-role-modelo';
import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { Rati } from '../../modelos/rati-modelo';

@Component({
  selector: 'banner-info-rati',
  templateUrl: './banner-info-rati.component.html',
  styleUrls: ['./banner-info-rati.component.scss']
})
export class BannerInfoRatiComponent implements OnInit {

  @Input() rati:Rati
  
  logo = "https://www-new.ufms.br/wp-content/uploads/2015/12/UFMS-timbre_2015.png"
  constructor() {
    
  }
  ngOnInit() {
  }
}
