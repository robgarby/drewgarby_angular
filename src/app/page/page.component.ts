import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

    constructor(private global: DataService, private http: HttpClient) { }

    thePage: string = 'PLATFORM';
    pageLayout: any = [];
    specialData: string = '';
    dreamData: any = [];
    pageScript: any = [];
    captionText: string = '';
    backgroundImage: string = '';

    ngOnInit(): void {
        this.thePage = this.global.thePage;
        this.getPageLayout(this.thePage);
        this.getDream(this.thePage);
        this.getPageCaption(this.thePage);
        this.global.hideNavEmiiter.emit(false);
    }

    supportDrew() {
        window.location.href = "https://secure.liberal.ca/page/nomination-register?campid=7015b000002pwbIAAQ";
    }
    
    setBackground(page:string){
        switch (page) {
            case 'HOME' : return 'theBackground1'; break;
            case 'ABOUT' : return 'theBackground2'; break;
            case 'PLATFORM' : return 'theBackground3'; break;
            default : return 'theBackground1'; break;
        }
    }

    checkBox(inval: string) {
        return this.pageLayout.includes(inval) ? true : false;
    }

    navigateSocial(inval: string) {
        this.global.navigateSocial(inval);
    }

    getIcon(inval: string) {
        return inval;
    }

    async getPageLayout(page: string) {
        let params = new HttpParams;
        params = params.append('script', 'layout');
        params = params.append('page', page);
        await this.http.get('https://www.drewgarby.com/DG/phpScripts/getData.php', { params: params }).subscribe(
            (response) => {
                var backString = Object.values(response);
                this.pageLayout = backString[0].sections.split(',');
                if (this.pageLayout.includes('SPECIAL')) {
                    console.log('has special');
                    this.getSpecial(this.thePage);
                }
            }
        )

    }

    async getSpecial(page: string) {
        let params = new HttpParams;
        console.log('getting special');
        params = params.append('script', 'specialData');
        params = params.append('page', page);
        await this.http.get('https://www.drewgarby.com/DG/phpScripts/getData.php', { params: params }).subscribe(
            (response) => {
                console.log(response);
                var backData = Object.values(response);
                this.specialData = backData[0].content;
            }
        )
    }

    async getDream(page: string) {
        let params = new HttpParams;
        params = params.append('script', 'dreamData');
        params = params.append('page', page);
        await this.http.get('https://www.drewgarby.com/DG/phpScripts/getData.php', { params: params }).subscribe(
            (response) => {
                this.dreamData = Object.values(response);
            }
        )
    }

    async getPageCaption(page: string) {
        let params = new HttpParams;
        params = params.append('script', 'getPage');
        params = params.append('page', page);
        await this.http.get('https://www.drewgarby.com/DG/phpScripts/getData.php', { params: params }).subscribe(
            (response) => {
                this.pageScript = Object.values(response);
                this.captionText = this.pageScript[0].content;
            }
        )
    }

    setVolunteer() {
        this.global.volunteerButtonEmitter.emit(!this.global.volunteerForm);
    }
}
