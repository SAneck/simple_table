import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable, toArray } from 'rxjs';
import { FormTypes, TaskField } from '../form-types';
import { TasksService } from '../tasks.service';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { DateTransformPipe } from '../date-transform.pipe';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, CommonModule, DateTransformPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  tasks$: Observable<FormTypes[]>
  numbersOfTasks$: Observable<number>
  
  pagination$: Observable<any>

  TaskField = TaskField

  sortPosition: boolean = false

  constructor(private taskService: TasksService){
    this.tasks$ = this.taskService.tasks$

    this.pagination$ = this.taskService.tasks$

    this.numbersOfTasks$ = this.taskService.tasks$.pipe(
      map((tasks) => tasks.length)
    )
  }

  changeSortIcon(){
    this.sortPosition = !this.sortPosition

  }
  
  sortContent(field: TaskField){
      this.taskService.sortContent(this.sortPosition, field)
    }
  

}
