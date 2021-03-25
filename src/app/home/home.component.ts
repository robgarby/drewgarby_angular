import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private global : DataService, private http: HttpClient) { }

  dreamData : any = [];
  pageScript : any = [];
  captionText : string = '';

  ngOnInit(): void {
      this.getDream();
      this.getPageCaption();
  }

  getIcon(inval:string){
      return inval;
  }

  async getDream() {
    let params = new HttpParams;
    params = params.append('script', 'dreamData');
    await this.http.get('https://www.drewgarby.com/DG/phpScripts/getData.php',{params : params}).subscribe(
      (response) => {
        this.dreamData = Object.values(response);
      }
    )
  }

  async getPageCaption() {
    let params = new HttpParams;
    params = params.append('script', 'getPage');
    params = params.append('page', 'HOME');
    await this.http.get('https://www.drewgarby.com/DG/phpScripts/getData.php',{params : params}).subscribe(
      (response) => {
        this.pageScript = Object.values(response);
        this.captionText = this.pageScript[0].content;
      }
    )
  }


}
