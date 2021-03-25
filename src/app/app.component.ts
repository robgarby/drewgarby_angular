import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router : Router, private global : DataService) {}
  title = 'Drew Garby';

  navBarItems : any = this.global.navBar;
  
  ngOnInit(){
      this.router.navigateByUrl('HOME');
  }
 
  navTo(inval:string){
      this.router.navigateByUrl(inval);
  }
}
