import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  navBar : any = [
    {"link" : 'ABOUT',"title" : 'About Drew'},
    {"link" : 'PLATFORM',"title" : 'Platform'},
    {"link" : 'SUPPORT',"title" : 'Support Drew'},
]

}
