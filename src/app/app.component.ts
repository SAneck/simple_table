import { Component } from '@angular/core';
import { AddTaskComponent } from "./add-task/add-task.component";
import { TableComponent } from "./table/table.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddTaskComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'table';

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksFromStorage()
  }

}
