import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;

  @Output() submitEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      client: [''],
      reference: [''],
      user: [''],
      date: [''],
      type: [''],
      status: [''],
    });
  }

  onSubmit() {
    console.log(this.searchForm.value);
    this.submitEvent.emit(this.searchForm.value);
  }
}
