import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

ngOnInit():void {
    this.searchForm = this.initForm();
  }

initForm(): FormGroup{
  console.log(this.fb.group, 'esto')
    return this.fb.group({
      client: [''],
      reference: [''],
      user: [''],
      date: [''],
      type: [''],
      status: ['']
    })
}

}
