import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private router: Router, public global: DataService) { }
    title = 'Drew Garby';

    navBarItems: any = this.global.navBar;
    volunteerForm: boolean = false;
    mask: boolean = false;
    localVolunteer : any = {};

    ngOnInit() {
        this.localVolunteer = this.global.volunteer;
        this.router.navigateByUrl('HOME');
        this.global.volunteerButtonEmitter.subscribe(
            (response: boolean) => {
                this.global.volunteerForm = response;
                this.mask = this.global.volunteerForm;
                this.volunteerForm = this.global.volunteerForm;
            }
        )
        this.volunteerForm = this.global.volunteerForm;
    }

    donateDrew(){
        window.location.href = "https://secure.liberal.ca/VictoryFund?campId=7010a000002puUrAAI&edaCampId=7010a000002puUw&sponsorContactId=0030a00001qxeXxAAI&eda=35088";
    }

    supportDrew(){
        window.location.href = "https://secure.liberal.ca/page/nomination-register?campid=7015b000002pwbIAAQ";
    }

    navTo(inval: string) {
        if (inval !== 'SUPPORT'){
            this.router.navigateByUrl(inval);
        } else {
            this.supportDrew();
        }
        
    }

    setVolunteer(){
        this.global.volunteerButtonEmitter.emit(!this.global.volunteerForm);
    }

    resetVolunteer(){
        this.global.thankYou = false;
        this.global.volunteer = {};
        this.global.volunteerButtonEmitter.emit(!this.global.volunteerForm);
    }
}
