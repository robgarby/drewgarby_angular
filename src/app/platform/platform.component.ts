import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
    selector: 'app-platform',
    templateUrl: './platform.component.html',
    styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

    constructor(private global : DataService, private http: HttpClient) { }

    dreamData : any = [];
    pageScript : any = [];
    captionText : string = '';
    currentPage : string = 'PLATFORM';
  
    navigateSocial(inval: string) {
        this.global.navigateSocial(inval);
    }
  
    ngOnInit(): void {
        this.getDream();
        this.getPageCaption();
    }
  
    getIcon(inval: string) {
        return inval;
    }
  
    async getDream() {
        let params = new HttpParams;
        params = params.append('script', 'dreamData');
        params = params.append('page', this.currentPage);
        await this.http.get('https://www.drewgarby.com/DG/phpScripts/getData.php', { params: params }).subscribe(
            (response) => {
                this.dreamData = Object.values(response);
            }
        )
    }
  
    async getPageCaption() {
        let params = new HttpParams;
        params = params.append('script', 'getPage');
        params = params.append('page', this.currentPage);
        await this.http.get('https://www.drewgarby.com/DG/phpScripts/getData.php', { params: params }).subscribe(
            (response) => {
                this.pageScript = Object.values(response);
                this.captionText = this.pageScript[0].content;
            }
        )
    }
  
    setVolunteer(){
      this.global.volunteerButtonEmitter.emit(!this.global.volunteerForm);
  }


}
