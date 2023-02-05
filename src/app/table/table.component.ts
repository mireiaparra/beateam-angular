import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Tasks } from '../../interfaces/tasks.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges{

  tasks: Tasks[] = [];
  p: number = 1;


  @Input() searchForm: any;

constructor(private tasksSvc: TasksService){
}

ngOnInit(): void {
}

ngOnChanges(): void {
  console.log('onchanges');
  this.getDataFromService();
}

private getDataFromService(): void{

  this.tasksSvc.getTasks(this.searchForm).subscribe((res: any) => {
    if (res?.data?.length) {
      const data = res.data;
      this.tasks = data;
    } else {
      this.tasks = [];
    }
    console.log("get tasks from service")
    console.log(this.tasks)

  })
}



}
