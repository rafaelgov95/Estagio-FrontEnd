import { UserRole } from './../../shared/modelos/user-role-modelo';
import { FormControl } from '@angular/forms';
import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'angular2-toaster';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  Perfil ="teste"
  fab="fab"
  selectedOption: string;
  profile: UserRole;
  dados: any;
  closeResult: string;

  constructor(private toastr: ToasterService,private modalService: NgbModal){
  
    this.profile= JSON.parse(localStorage.getItem("currentUserRole"))
  }
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  
  ngOnInit() {
   
  }
   
}


