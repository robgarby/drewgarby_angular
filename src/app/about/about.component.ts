import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    constructor(private global: DataService, private http: HttpClient) { }

    dreamData: any = [];
    pageScript: any = [];
    captionText: string = '';
    currentPage: string = 'ABOUT';
    pageLayout: any = [];
    specialData: string = '';

    navigateSocial(inval: string) {
        this.global.navigateSocial(inval);
    }

    ngOnInit(): void {
        this.getPageLayout()
        this.getDream();
        this.getPageCaption();
    }

    getIcon(inval: string) {
        return inval;
    }

    checkBox(inval: string) {
        return this.pageLayout.includes(inval) ? true : false;
    }

    async getPageLayout() {
        let params = new HttpParams;
        params = params.append('script', 'layout');
        params = params.append('page', this.currentPage);
        await this.http.get('https://www.drewgarby.com/DG/phpScripts/getData.php', { params: params }).subscribe(
            (response) => {
                var backString = Object.values(response);
                this.pageLayout = backString[0].sections.split(',');
                if (this.pageLayout.includes('SPECIAL')) {
                    this.getSpecial();
                }
            }
        )

    }

    async getSpecial() {
        let params = new HttpParams;
        params = params.append('script', 'specialData');
        params = params.append('page', this.currentPage);
        await this.http.get('https://www.drewgarby.com/DG/phpScripts/getData.php', { params: params }).subscribe(
            (response) => {
                var backData = Object.values(response);
                this.specialData = backData[0].content;
            }
        )
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

    setVolunteer() {
        this.global.volunteerButtonEmitter.emit(!this.global.volunteerForm);
    }


}