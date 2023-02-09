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
  status: string[] = [];
  selectedStatus: string[] = [];
  datePickerConfig: Partial<BsDatepickerConfig>;

  @Output() submitEvent: EventEmitter<any> = new EventEmitter<{searchForm: string, selectedStatus: string}>();

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
    this.getStatusFromService();
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
    this.submitEvent.emit({
      "searchForm": this.searchForm.value, 
      "selectedStatus": this.selectedStatus});
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

private getStatusFromService(): void {
  this.typesSvc.getStatus().subscribe((res: any) => {
    if (res?.data?.length) {
      const data = res.data;
      this.status = data;
    } else {
      this.status = [];
    }
  })
}


onCheckboxChange(event: any, eachStatus: string) {
  if(event.target.checked){
    this.selectedStatus.push(eachStatus);
  } else {
    this.selectedStatus.splice(this.selectedStatus.indexOf(eachStatus), 1)
  }
}

onClear(input: string){
  this.searchForm.patchValue({
    [input]: ''
  });
  this.submitEvent.emit({
    "searchForm": this.searchForm.value,
    "selectedStatus": this.selectedStatus});
}

}
