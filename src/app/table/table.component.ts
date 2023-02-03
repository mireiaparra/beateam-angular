import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Tasks } from '../../interfaces/tasks.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

  tasks: Tasks[] = [];
  p: number = 1;

constructor(private tasksSvc: TasksService){
}

ngOnInit(): void {
  this.getDataFromService();
}

private getDataFromService(): void{
this.tasksSvc.getTasks().subscribe((res: any) => {
  if (res?.data?.length) {
    const data = res.data;
    this.tasks = [...this.tasks, ...data];
  } else {
    this.tasks = [];
  }
  console.log(this.tasks)
})
}

}
