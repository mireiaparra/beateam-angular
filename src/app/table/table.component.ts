import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Tasks } from '../../interfaces/tasks.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnChanges {
  tasks: Tasks[] = [];
  p: number = 1;

  @Input() searchForm: any;

  constructor(private tasksSvc: TasksService) {}

  ngOnChanges(): void {
    this.getDataFromService();
  }

  private getDataFromService(): void {
    this.tasksSvc.getTasks(this.searchForm).subscribe((res: any) => {
      if (res?.data?.length) {
        const data = res.data;
        this.tasks = data;
      } else {
        this.tasks = [];
      }
    });
  }

  getTasksPerPage() {
    //being 41 the height of the cells and 120 the necessary space for the pagination numbers and the headings
    return Math.round((window.innerHeight - 120) / 41);
  }
}
