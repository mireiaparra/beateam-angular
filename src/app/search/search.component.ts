import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TasksService } from '../services/tasks.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  types: string[] = [];
  datePickerConfig: Partial<BsDatepickerConfig>;

  @Output() submitEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private typesSvc: TasksService) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        rangeInputFormat: 'DD/MM/YY'
      });

  }

  ngOnInit(): void {
    this.searchForm = this.initForm();
    this.getTypesFromService();
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

  private getTypesFromService(): void {
  this.typesSvc.getTypes().subscribe((res: any) => {
    if (res?.data?.length) {
      const data = res.data;
      this.types = data;
    } else {
      this.types = [];
    }
  })
}
}
