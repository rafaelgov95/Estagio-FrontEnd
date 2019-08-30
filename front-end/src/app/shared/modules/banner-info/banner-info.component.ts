import { UserRole } from './../../modelos/user-role-modelo';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'banner-info',
  templateUrl: './banner-info.component.html',
  styleUrls: ['./banner-info.component.scss']
})
export class BannerInfoComponent implements OnInit {

  profile: UserRole;
  logo = "https://www-new.ufms.br/wp-content/uploads/2015/12/UFMS-timbre_2015.png"
  constructor() {
    this.profile = new UserRole("", false, "", "", "", "", "", "", "", "", "", "", false, "", "", false)

   this.profile= JSON.parse(localStorage.getItem("currentUserRole"))
  }
  ngOnInit() {

  }
}
