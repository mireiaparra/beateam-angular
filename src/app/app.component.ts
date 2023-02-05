import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'beateam-angular';
  searchForm = {
    client: "",
    reference: "",
    user: ""
  };

  send(searchForm: any) {
    console.log('send');
    this.searchForm = searchForm;
  }

    constructor() { }
 

}
