import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private router: Router, private http:HttpClient) { }

    volunteerButtonEmitter = new EventEmitter();
    volunteerForm: boolean = false;

    navBar: any = [
        { "link": 'ABOUT', "title": 'About Drew' },
        { "link": 'PLATFORM', "title": 'Platform' },
        { "link": 'SUPPORT', "title": 'Support Drew' },
    ]

    volunteer : any = {"firstName":"","lastName":"","email":"","phone":"","postal":""};

    navigateSocial(inval: string) {
        switch (inval) {
            case 'facebook': window.location.href = 'https://www.facebook.com/drew.garby2021', '_blank'; break;
            case 'twitter': window.location.href = 'https://twitter.com/Drew_Garby', 'target="_blank"'; break;
            case 'instagram': window.location.href = 'https://www.instagram.com/drew.garby/?hl=en', '_blank'; break;
            case 'linkedIn': window.location.href = 'https://ca.linkedin.com/in/drew-garby-55b5b73a', '_blank'; break;

        }
    }

    client : any = {};
    thankYou : boolean = false;


    async saveVolunteer(inArray:any){
        this.thankYou = false;
        let params = new HttpParams;
        params = params.append('script', 'saveVolunteer');
        params = params.append('data',JSON.stringify(inArray));
        await this.http.get('https://www.drewgarby.com/DG/phpScripts/getData.php',{params : params}).subscribe(
      (response) => {
        this.client = Object.values(response);
        this.thankYou = true;
      }
    )
    }

}
