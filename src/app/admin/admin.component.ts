import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private global : DataService, private router : Router) { }

  adminPassword : string = 'MerMer';
  mask: boolean = true;
  showHideButton : boolean = true;

  ngOnInit(): void {
    this.showHideButton = true;
  }

  checkPassword(){
      if (this.adminPassword === 'MerMer'){
          this.global.hideNavEmiiter.emit(true);
          this.showHideButton = false;
          this.mask = false;
      }
  }



}
