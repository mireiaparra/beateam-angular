import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'beateam-angular';
  searchForm = {
    client: '',
    reference: '',
    user: '',
    type: '',
    date: [],
    status: [],
  };

  send(event: any) {
    this.searchForm = event.searchForm;
    this.searchForm.status = event.selectedStatus;
  }

  constructor() {}
}
