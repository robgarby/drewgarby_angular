import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private router: Router, public global: DataService) { }
    title = 'Drew Garby / Carleton Riding Candidate';

    navBarItems: any = this.global.navBar;
    volunteerForm: boolean = false;
    mask: boolean = false;
    localVolunteer: any = {};
    localHideBar: boolean = false;

    ngOnInit() {
        this.localVolunteer = this.global.volunteer;
        this.global.volunteerButtonEmitter.subscribe(
            (response: boolean) => {
                this.global.volunteerForm = response;
                this.mask = this.global.volunteerForm;
                this.volunteerForm = this.global.volunteerForm;
            }
        )
        this.global.hideNavEmiiter.subscribe(
            (response: boolean) => {
                this.localHideBar = response;
            }
        )
        this.global.hideNavEmiiter.emit(false);
        this.volunteerForm = this.global.volunteerForm;
    }

    hideBoxMenu : boolean = true;

    showBarsBox(){
        this.hideBoxMenu = !this.hideBoxMenu;
    }

    donateDrew() {
        window.location.href = "https://secure.liberal.ca/VictoryFund?campId=7010a000002puUrAAI&edaCampId=7010a000002puUw&sponsorContactId=0030a00001qxeXxAAI&eda=35088";
    }

    supportDrew() {
        window.location.href = "https://secure.liberal.ca/page/nomination-register?campid=7015b000002pwbIAAQ";
    }

    navTo(inval: string) {
        this.global.thePage = inval;
        let currentUrl = this.router.url;
        if (inval !== 'SUPPORT') {
            if (currentUrl === '/') {
                this.router.navigateByUrl('PAGE');
            } else {
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.router.navigate([currentUrl]);
                });
            }
        } else {
            this.supportDrew();
        }
    }

    navToSmall(inval: string) {
        this.hideBoxMenu = !this.hideBoxMenu;
        this.global.thePage = inval;
        let currentUrl = this.router.url;
        if (inval !== 'SUPPORT') {
            if (currentUrl === '/') {
                this.router.navigateByUrl('PAGE');
            } else {
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.router.navigate([currentUrl]);
                });
            }
        } else {
            this.supportDrew();
        }
    }

    setVolunteer() {
        this.global.volunteerButtonEmitter.emit(!this.global.volunteerForm);
    }

    resetVolunteer() {
        this.global.thankYou = false;
        this.global.volunteer = {};
        this.global.volunteerButtonEmitter.emit(!this.global.volunteerForm);
    }
}
